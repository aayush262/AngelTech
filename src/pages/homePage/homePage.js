import React from 'react';
import { Header } from '../../components/header/header.component';
import { HomeInfo } from '../../components/homeInfo/homeInfo.component';
import { AboutUs } from '../../components/aboutUs/aboutUs.component';
import { OurServices } from '../../components/ourServices/ourSevices.component';
import { WhyChooseUs } from '../../components/whyChooseUs/whyChooseUs.component';
import { OurTeam } from '../../components/team/team.component';
import { Footer } from '../../components/footer/footer.component';
import { Contact } from '../../components/contact/contact.component';
import { Sidebar } from '../../components/sidebar/sidebar.component';



export class HomePage extends React.Component {
1  
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
                <HomeInfo></HomeInfo>
                <AboutUs></AboutUs>
                <OurServices></OurServices>
                <WhyChooseUs></WhyChooseUs>
                <OurTeam></OurTeam>
                <Contact></Contact>
                <Footer></Footer>
            </div>
        )
    }
}