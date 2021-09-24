"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const competition_controller_1 = require("../controllers/competition.controller");
const competitionRouter = express_1.default.Router();
competitionRouter.route('/addCompetition').post((req, res) => new competition_controller_1.CompetitionController().addCompetition(req, res));
competitionRouter.route('/addCompetitor').post((req, res) => new competition_controller_1.CompetitionController().addCompetitor(req, res));
competitionRouter.route('/closeCompetition').post((req, res) => new competition_controller_1.CompetitionController().closeCompetition(req, res));
competitionRouter.route('/getAllOpenCompetition').get((req, res) => new competition_controller_1.CompetitionController().getAllOpenCompetion(req, res));
competitionRouter.route('/getAllCompetition').get((req, res) => new competition_controller_1.CompetitionController().getAllCompetion(req, res));
exports.default = competitionRouter;
//# sourceMappingURL=competition.routes.js.map