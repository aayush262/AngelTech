import React from 'react';
import { Header } from '../../components/header/header.component';
import { Footer } from '../../components/footer/footer.component';
import { NotFoundInfo } from '../../components/notFound/notFound.component';
import { Sidebar } from '../../components/sidebar/sidebar.component';


export class NotFoundPage extends React.Component {

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
                <NotFoundInfo></NotFoundInfo>
                <Footer></Footer>
            </div>
        )
    }
}