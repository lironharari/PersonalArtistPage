import React from 'react';

class PageHeader extends React.Component {      
    render() {                
      return (
          <div className="pageHeader">
                <h1>{this.props.title}</h1>
                <h4>{this.props.subtitle}</h4>
          </div>         
        );
    }
  }

export default PageHeader;