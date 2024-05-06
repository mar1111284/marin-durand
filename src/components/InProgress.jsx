// InProgress.jsx

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGears } from '@fortawesome/free-solid-svg-icons'

const InProgress = () => {

    return (
        <div className='inProgress-container'>

            <div>
            
                <h2>Page Under Construction <FontAwesomeIcon icon={faGears} style={{color: "black", fontSize: '2rem', marginLeft: '1rem'}}/> </h2>
                <p>We're currently working hard to bring you an amazing experience on this page. Please bear with us as we put the finishing touches in place. In the meantime, feel free to explore the rest of our website or contact us if you have any questions or need assistance. Thank you for your patience!</p>
            
            </div>

        </div>
    )
  }
  
export default InProgress;