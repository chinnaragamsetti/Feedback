// Write your React code here.

import {Component} from '.react'
import './index.css' 

class Feedback extends Component{
    const state={isSatisfied:false}
    feedback=()=>{
        const {resources}=this.props
        const {emojis} =this.props

        return(
            <div className="ratingcontainer">
                        <h1 className="h1">How satisfied are you with our customer support perfomance</h1>
                        
                        <ul className="imagescontainer">
                            {resources.emojis.map(each=>(
                                <li className='responsecontainer' key={each.id} listDetails={each}>
                                    <div>
                                        <img src={} alt="image" onClick={this.onChange} />
                                        <p className='p'>{}</p>
                                    </div></div>
                                </li>/> 
                            ))}
                        </ul>
                    </div>
        )
    }
    response=()=>{
        const {resources}=this.props
        const {loveEmojiUrl}=resources
        return(
                 <div className="responsecontainer">
                        <img src={loveEmojiUrl} className='image' alt="img" />
                        <h1 className="h1">Thank you</h1>
                        <p className="p">We will use your feedback to improve our customer support perfomance</p>
                    </div>
        )
    }
    render(){
        const {resources}=this.props
        const{isSatisfied}=this.setState

        return(
                <div className="mainbg">
                    {isSatisfied ? this.feedback():this.response()}
                </div>
        )
    }
}



expport default Feedback