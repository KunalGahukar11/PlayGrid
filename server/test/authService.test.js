const authService = require("../services/authService");
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

jest.mock("../models/userModel.js");
jest.mock("bcrypt");
jest.mock("jsonwebtoken");

describe("authService-signUp", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("password n confirmPassword not match", async () => {
    const res = await authService.signUp({
      username: "Rahul",
      email: "rahul@test.com",
      contactNo: 9876543210,
      password: "Test123",
      confirmPassword: "Test1234",
    });

    expect(res.status).toBe(400);
    expect(res.success).toBe(false);
    expect(res.message).toBe("Password and Confirm Password should be same");
    expect(res.data).toEqual([]);

    expect(userModel.findOne).not.toHaveBeenCalled();
  });

  test("Email should be unique", async () => {
    userModel.findOne.mockResolvedValue({
      username: "Existing User",
      email: "test@gmail.com",
    });

    const res = await authService.signUp({
      username: "Rahul",
      email: "test@gmail.com",
      contactNo: 9876543210,
      password: "Test123",
      confirmPassword: "Test123",
    });

    expect(res.status).toBe(400);
    expect(res.success).toBe(false);
    expect(res.message).toBe("User already exist");
    expect(res.data).toEqual([]);

    expect(userModel.findOne).toHaveBeenCalledWith({
      email: "test@gmail.com",
    });

    expect(userModel.create).not.toHaveBeenCalled();
  });

  test("creating user", async () => {
    userModel.findOne.mockResolvedValue(null);

    userModel.create.mockResolvedValue({
      username: "new User",
      email: "test1@gmail.com",
      contactNo: 9876543210,
    });

    const res = await authService.signUp({
      username: "Rahul1",
      email: "test1@gmail.com",
      contactNo: 9876543210,
      password: "Test123",
      confirmPassword: "Test123",
    });

    expect(res.status).toBe(200);
    expect(res.success).toBe(true);
    expect(res.message).toBe("SignUp successful");
    expect(res.data).toEqual({
      username: "new User",
      email: "test1@gmail.com",
      contactNo: 9876543210,
    });

    expect(userModel.findOne).toHaveBeenCalledWith({
      email: "test1@gmail.com",
    });

    expect(userModel.create).toHaveBeenCalledWith({
      username: "Rahul1",
      email: "test1@gmail.com",
      contactNo: 9876543210,
      password: "Test123",
    });
  });
});

describe("authService-login", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("missing credentials", async () => {
    const res = await authService.login({});

    expect(res.status).toBe(400);
    expect(res.success).toBe(false);
    expect(res.message).toBe("Username and Password required!");
    expect(res.data).toEqual([]);

    expect(userModel.findOne).not.toHaveBeenCalled();
  });

  test("user not found", async () => {
    userModel.findOne.mockResolvedValue(null);

    const res = await authService.login({
      username: "Test",
      password: "pass@123",
    });

    expect(res.status).toBe(400);
    expect(res.success).toBe(false);
    expect(res.message).toBe("Don't have account, create one");
    expect(res.data).toEqual([]);

    expect(userModel.findOne).toHaveBeenCalledWith({
      username: "Test",
    });
  });

  test("password match", async () => {
    userModel.findOne.mockResolvedValue({
      username: "Test",
      password: "hashedPassword123",
    });

    bcrypt.compare.mockResolvedValue(false);

    const res = await authService.login({
      username: "Test",
      password: "pass@1234",
    });

    expect(res.status).toBe(401);
    expect(res.success).toBe(false);
    expect(res.message).toBe("Incorrect Password");
    expect(res.data).toEqual([]);

    expect(bcrypt.compare).toHaveBeenCalledWith(
      "pass@1234",
      "hashedPassword123"
    );
  });

  test("login successful", async () => {
    userModel.findOne.mockResolvedValue({
      _id: "1234",
      username: "Test",
      password: "hashedPassword@1234",
      email: "test@gmail.com",
    });

    process.env.SECRET_KEY = "test_secret_key";

    bcrypt.compare.mockResolvedValue(true);
    jwt.sign.mockReturnValue("haksgyhdefg6637");

    const res = await authService.login({
      username: "Test",
      password: "pass@1234",
    });

    expect(res.status).toBe(200);
    expect(res.success).toBe(true);
    expect(res.message).toBe("Login successful");
    expect(res.data).toEqual({
      name: "Test",
      email: "test@gmail.com",
      token: "haksgyhdefg6637",
    });

    expect(userModel.findOne).toHaveBeenCalledWith({
      username: "Test",
    });

    expect(jwt.sign).toHaveBeenCalledWith(
      {
        userId: "1234",
        username: "Test",
      },
      "test_secret_key",
      { expiresIn: "1d" }
    );
  });
});
