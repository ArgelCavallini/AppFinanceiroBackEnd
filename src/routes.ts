import { Router } from "express";

import { ensureAuthenticateUser } from "./middlewares/ensureAuthenticateUser";

import { AuthenticateUserController } from "./modules/account/authenticateUser/AuthenticateUserController";
import { CreateAccountsPayableController } from "./modules/accounts_payable/createAccountsPayable/CreateAccountsPayableController";
import { CreateAccountsReceivableController } from "./modules/accounts_receivable/createAccountsReceivable/createAccountsReceivableController";
import { CreateCompanyController } from "./modules/company/createCompany/CreateCompanyController";
import { CreateUserController } from "./modules/user/createUser/CreateUserController";
import { FindCompanyController } from "./modules/company/findCompany/FindCompanyController";
import { FindAccountsPayableController } from "./modules/accounts_payable/findAccountsPayable/FindAccountsPayableController";
import { FindAccountsReceivableController } from "./modules/accounts_receivable/findAccountsReceivable/FindAccountsReceivableController";
import { FindUserController } from "./modules/user/findUser/FindUserController";

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

routes.post("/authenticate_user", authenticateUserController.handle);

routes.post("/user", ensureAuthenticateUser, createUserController.handle);
routes.get("/user", ensureAuthenticateUser, findUserController.handle);

routes.post("/company", ensureAuthenticateUser, createCompanyController.handle);
routes.get("/company", ensureAuthenticateUser, findCompanyController.handle);

routes.post("/accounts_payable", ensureAuthenticateUser, createAccountsPayableController.handle);
routes.get("/accounts_payable", ensureAuthenticateUser, findAccountsPayableController.handle);

routes.post("/accounts_receivable", ensureAuthenticateUser, createAccountsReceivableController.handle);
routes.get("/accounts_receivable", ensureAuthenticateUser, findAccountsReceivableController.handle);

export { routes }