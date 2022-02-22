import { Router } from "express";

import { ensureAuthenticateUser } from "../middlewares/ensureAuthenticateUser";

import { AuthenticateUserController } from "../modules/useCases/account/authenticateUser/AuthenticateUserController";
import { CreateAccountsPayableController } from "../modules/useCases/accounts_payable/createAccountsPayable/CreateAccountsPayableController";
import { CreateAccountsReceivableController } from "../modules/useCases/accounts_receivable/createAccountsReceivable/createAccountsReceivableController";
import { CreateCompanyController } from "../modules/useCases/company/createCompany/CreateCompanyController";
import { CreateUserController } from "../modules/useCases/user/createUser/CreateUserController";
import { FindCompanyController } from "../modules/useCases/company/findCompany/FindCompanyController";
import { FindAccountsPayableController } from "../modules/useCases/accounts_payable/findAccountsPayable/FindAccountsPayableController";
import { FindAccountsReceivableController } from "../modules/useCases/accounts_receivable/findAccountsReceivable/FindAccountsReceivableController";
import { FindUserController } from "../modules/useCases/user/findUser/FindUserController";
import { DeleteUserController } from "../modules/useCases/user/deleteUser/DeleteUserController";

const routes = Router();

const createUserController = new CreateUserController
const createCompanyController = new CreateCompanyController
const createAccountsPayableController = new CreateAccountsPayableController
const createAccountsReceivableController = new CreateAccountsReceivableController
const authenticateUserController = new AuthenticateUserController
const findCompanyController = new FindCompanyController
const findAccountsPayableController = new FindAccountsPayableController
const findAccountsReceivableController = new FindAccountsReceivableController
const findUserController = new FindUserController
const deleteUserController = new DeleteUserController

routes.post("/authenticate_user", authenticateUserController.handle);

routes.post("/user", ensureAuthenticateUser, createUserController.handle);
routes.get("/user", ensureAuthenticateUser, findUserController.handle);
routes.delete("/user/:id", ensureAuthenticateUser, deleteUserController.handle);

routes.post("/company", ensureAuthenticateUser, createCompanyController.handle);
routes.get("/company", ensureAuthenticateUser, findCompanyController.handle);

routes.post("/accounts_payable", ensureAuthenticateUser, createAccountsPayableController.handle);
routes.get("/accounts_payable", ensureAuthenticateUser, findAccountsPayableController.handle);

routes.post("/accounts_receivable", ensureAuthenticateUser, createAccountsReceivableController.handle);
routes.get("/accounts_receivable", ensureAuthenticateUser, findAccountsReceivableController.handle);

export { routes }