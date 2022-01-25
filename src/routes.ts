import { Router } from "express";

import { ensureAuthenticateUser } from "./middlewares/ensureAuthenticateUser";

import { AuthenticateUserController } from "./modules/account/authenticateUser/AuthenticateUserController";
import { CreateAccountsPayableController } from "./modules/accounts_payable/createAccountsPayable/CreateAccountsPayableController";
import { CreateAccountsReceivableController } from "./modules/accounts_receivable/createAccountsReceivable/createAccountsReceivableController";
import { CreateCompanyController } from "./modules/company/createCompany/CreateCompanyController";
import { CreateUserController } from "./modules/user/createUser/CreateUserController";

const routes = Router();

const createUserController = new CreateUserController
const createCompanyController = new CreateCompanyController
const createAccountsPayableController = new CreateAccountsPayableController
const createAccountsReceivableController = new CreateAccountsReceivableController
const authenticateUserController = new AuthenticateUserController

routes.post("/authenticate_user", authenticateUserController.handle);

routes.post("/user", ensureAuthenticateUser, createUserController.handle);
routes.post("/company", ensureAuthenticateUser, createCompanyController.handle);
routes.post("/accounts_payable", ensureAuthenticateUser, createAccountsPayableController.handle);
routes.post("/accounts_receivable", ensureAuthenticateUser, createAccountsReceivableController.handle);


export { routes }