import React from 'react';
import { Header } from '../../components/header/header.component';
import { OurTeam } from '../../components/team/team.component';
import { Contact } from '../../components/contact/contact.component';
import { Footer } from '../../components/footer/footer.component';
import { WebInfo } from '../../components/webInfo/webInfo.component';
import { Sidebar } from '../../components/sidebar/sidebar.component';

export class WebPage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isOpen: false
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    openSidebar=()=>{
        this.setState((prevState)=>{
            return{
                isOpen:true
            }
        })
    }  
    closeSidebar=()=>{
        this.setState((prevState)=>{
            return{
                isOpen:false
            }
        })
    } 

    render() {
        return (
            <div className="site-wrap" id="home-section">
                <Sidebar onCloseSidebar={this.closeSidebar} isOpen={this.state.isOpen}></Sidebar>
                <Header onOpenSidebar={this.openSidebar}></Header>
                <WebInfo></WebInfo>
                <OurTeam></OurTeam>
                <Contact></Contact>
                <Footer></Footer>
            </div>
        )
    }
}