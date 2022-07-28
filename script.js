const tabCount = 6;
let tabGroups = [
  { tab1: true, tab2: false, tab3: false },
  { tab4: true, tab5: false, tab6: false },
];

const userClickTab = (tabNumber) => {
  tabGroups.forEach(function (tabGroup) {
    if (`tab${tabNumber}` in tabGroup) {
      Object.keys(tabGroup).forEach((key) => {
        tabGroup[key] = false;
      });
      tabGroup[`tab${tabNumber}`] = true;
    }
  });
  updateCSS();
};

const updateCSS = () => {
  tabGroups.forEach(function (tabGroup) {
    Object.keys(tabGroup).forEach((key) => {
      let tabId = key;
      let tabPanel = key.replace('tab', 'tabpanel');
      if (tabGroup[key] === true) {
        // display clicked/loaded tab
        document.getElementById(tabId).classList.add('selectedTab');
        document.getElementById(tabPanel).removeAttribute('hidden');
      } else {
        // hide previous tab
        document.getElementById(tabId).classList.remove('selectedTab');
        document.getElementById(tabPanel).setAttribute('hidden', true);
      }
    });
  });
};

const init = () => {
  let tabCount = 0;
  tabGroups.forEach((tabGroup) => {
    tabCount += Object.keys(tabGroup).length;
  });
  for (let i = 1; i <= tabCount; i++) {
    document.getElementById(`tab${i}`).addEventListener('click', () => {
      userClickTab(i);
    });
  }
  updateCSS();
};

init();
