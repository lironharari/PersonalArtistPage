import React from 'react';

class PageHeader extends React.Component {  
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            subtitle: props.subtitle
        };        
      }
    render() {        
        const {title, subtitle} = this.state;
      return (
          <div className="pageHeader">
                <h1>{title}</h1>
                <h4>{subtitle}</h4>
          </div>         
        );
    }
  }

export default PageHeader;