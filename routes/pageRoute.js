// express route'in calistirildigi dosya

import express from 'express';
import * as pageController from "../controllers/pageController.js"; // default olarak export edilmedigi icin bu sekide aldik

const router = express.Router();

router.route("/").get(pageController.getIndexPage);
router.route("/about").get(pageController.getAboutPage);

export default router;