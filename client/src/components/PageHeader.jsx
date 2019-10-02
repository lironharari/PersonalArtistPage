import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
            <Row className="pageHeader">
                <Col>                       
                    <h1>{title}</h1>
                    <h4>{subtitle}</h4>
                </Col>                
            </Row> 
        );
    }
  }

export default PageHeader;