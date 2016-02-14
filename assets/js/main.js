import StartView from './views/start-view';
import OverviewView from './views/overview-view';
import AgreementView from './views/agreement-view';
import HouseholdInformationView from './views/household-information-view';
import AssistProgramView from './views/assist-program-view';
import ChildrenInformationView from './views/children-information-view';
import OtherHouseholdMemberView from './views/other-household-member-view';
import AdultAttestationView from './views/adult-attestation-view';
import ReviewView from './views/review-view';

class App {
  constructor(options) {
    this.options = options || {};

    this.container = this.options.container || document.body;
    this.state = localStorage.getItem('eatChallengeState');

    this.startView = new StartView;
    // this.overviewView = new OverviewView;
    // this.agreementView = new AgreementView;
    // this.householdInformationView = new HouseholdInformationView;
    // this.assistProgramView = new AssistProgramView;
    // this.childredInformationView = new ChildrenInformationView;
    // this.otherHouseholdMemberView = new OtherHouseholdMemberView;
    // this.adultAttestationView = new AdultAttestationView;
    this.reviewView = new ReviewView;

    this.activeView = this.determineActiveViewFromState();
  }

  start() {
    this.container.appendChild(this.activeView.render().el);
  }

  determineActiveViewFromState() {
    if (this.state) {
      return this.reviewView;
    }

    return this.startView;
  }
}

export default App;
