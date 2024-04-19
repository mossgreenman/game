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
    android: "https://play.google.com/store/apps/details?id=com.ironhuy.vietnamLunarTetGame",
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
