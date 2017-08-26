import React from 'react';
// import { Link } from 'react-router-dom';
import Github from '../../public/assets/github';
import Linkedin from '../../public/assets/in';
import Email from '../../public/assets/email';
import Resume from '../../public/assets/resume';
import Silvia from '../../public/assets/silvia.pdf';


const Contact = () => {
  return  (
    <div className="tableContainer">
      <table>
        <tbody>
          <tr>
            <td><a href="https://github.com/dahlki" target="_blank"><Github className='github-icon'/></a></td>
            <td><a href="https://www.linkedin.com/in/silvia-sonn-787268139/" target="_blank"><Linkedin className='linkedin-icon'/></a></td>
            <td><a href="mailto:silviasonn@gmail.com"><Email className='email-icon'/></a></td>
            <td><a href={Silvia} download="silvia.pdf"><Resume className='resume-icon'/></a></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Contact;