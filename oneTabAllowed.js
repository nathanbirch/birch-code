const tabCount = 6;
let activeTab = 1;
let previouslyActiveTab = 1;

const userClickTab = (tabNumber) => {
  if (activeTab !== tabNumber) {
    // don't toggle if it's already active
    activeTab = tabNumber; // reassign active tab number
    if (activeTab !== previouslyActiveTab) {
      modifyTabCSS(tabNumber, previouslyActiveTab);
    }
    previouslyActiveTab = activeTab; // reassign var for next click
  }
};

const modifyTabCSS = (showTab, hideTab) => {
  // display clicked/loaded tab
  document.getElementById(`tab${showTab}`).classList.add('selectedTab');
  document.getElementById(`tabpanel${showTab}`).removeAttribute('hidden');

  if (hideTab) {
    // hide previous tab
    document.getElementById(`tab${hideTab}`).classList.remove('selectedTab');
    document.getElementById(`tabpanel${hideTab}`).setAttribute('hidden', true);
  }
};

const init = () => {
  for (let i = 1; i <= tabCount; i++) {
    document.getElementById(`tab${i}`).addEventListener('click', () => {
      userClickTab(i);
    });
  }
  modifyTabCSS(activeTab);
};

init();
