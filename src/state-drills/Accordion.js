import React from "react";

class Accordian extends React.Component {
  static defaultProps = {sections: []};
  state = {
    currentTabIndex: 0
  }
  handleButtonClick(index) {
    this.setState({ currentTabIndex: index })
  }
  renderButtons() {
    return this.props.tabs.map((tab, index) => (
      <li>
        <button key={index} onClick={() => this.handleButtonClick(index)}>
        {tab.name}
        </button>
      </li>
    ))
  }
  renderContent() {
    const currentTab = this.props.tabs[this.state.currentTabIndex]
    return (
      <p className='content'>
        {currentTab.content}
      </p>
    )
  }
  render() {
    return (
      <ul>
        {this.renderButtons()}
        {!!this.props.tabs.length && this.renderContent()}
      </ul>
    )
  }
}

export default Accordian;