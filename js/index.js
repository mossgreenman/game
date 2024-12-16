const appUrls = {
  captainVietnam: {
    android: "https://play.google.com/store/apps/details?id=com.ironhuy.captainVietnam",
    ios: "",
  },
  classifyChallenge: {
    android: "https://play.google.com/store/apps/details?id=com.ironhuy.classifychallenge",
    ios: "",
  },
  tetGame: {
    android: "https://play.google.com/store/apps/details?id=com.mossgreenman.tetGame",
    ios: "",
  },
};

const tabs = [
  {
    id: "privacyPolicy",
    display: "block",
    tabId: "privacyPolicyTab",
    contentId: "privacyPolicy",
  },
  {
    id: "appList",
    display: "flex",
    tabId: "appListTab",
    contentId: "appList",
  },
];

const tabCssClass = {
  active: "tabs__tab--active",
  deactive: "tabs__tab",
};

window.onload = (ev) => {
  this.selectTab("privacyPolicy");
};

/**
 * redirect to url
 * @param url refer to url to redirect
 */
function viewAppOnStore(store, appId) {
  let appUrl = appUrls[appId][store];
  window.open(appUrl, "_blank");
}

/**
 * select a tab
 * @param tabId refer to tab id
 */
function selectTab(tabId) {
  tabs.forEach((tab) => {
    const tabEl = document.getElementById(tab.tabId);
    const tabContentEl = document.getElementById(tab.contentId);

    if (tab.id == tabId) {
      tabContentEl.style.display = tab.display;
      tabEl.classList.add(tabCssClass.active);
    } else {
      tabContentEl.style.display = "none";
      tabEl.classList.remove(tabCssClass.active);
    }
  });
}

/* ------------------------- Routing ------------------------- */
const gameTitleEl = document.getElementById("gameTitle");

const routes = {
  "/": "Moss Green Man Games",
  "/captainVietnam": "Captain Vietnam",
  "/classifyChallenge": "Classify Challenge",
  "/findTheOddOneOut": "Find The Odd One Out",
  "/fruitsMagicFusion": "Fruits Magic Fusion",
  "/troChoiTet": "Tro Choi TET",
  "/tetGame": "Vietnam TET: Drop Merge",
  "/pandaGameAnimalMerge": "Panda Game: Animal Merge",
  "/crocodileRouletteTeeth": "Crocodile Roulette Teeth",
  "/dogeTheCreeps": "Doge The Creeps",
};

const router = () => {
  const hashLocation = location.hash.slice(1) || "/";

  if (routes[hashLocation]) {
    document.title = routes[hashLocation];
    gameTitleEl.innerText = routes[hashLocation];
  } else {
    document.title = "Moss Green Man Games";
    gameTitleEl.innerText = "Moss Green Man Games";
  }
};

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
