import React from 'react';
import Button from '../../components/button';
import './index.scss';
import Helmet from '../../components/helmet';

const CV = () => {
  return (
    <div className='cv-page'>
      <div className="hero">
        <div className="text-box">
          <h1 className="main-title">Emma Hollows Design</h1>
          <div className="subtitle">designer | supervisor | maker</div>
          <span>
            Instagram: <a href="https://instagram.com/emma.hollows.design">@emma.hollows.design</a>
          </span>
          <span>
            Email: <a href="mailto:emma@emmahollows.co.uk">emma@emmahollows.co.uk</a>
          </span>
          <span>
            <a href="tel:0791 689 6013"></a>+44 791 689 6013
          </span>
          <div className="btn-container">
            <Button
              link='EmmaHollowsFullCostumeCV.pdf'
              text='Download my CV'
              background='var(--secondary)'
              color="#000"
            />
          </div>
        </div>
      </div>

      <div className="subtitle">West End Theatre Credits</div>
      <div className="cv-table-wrapper">
        <table>
        <thead>
          <tr>
            <th>Production</th>
            <th>Role</th>
            <th>Director/Choreographer</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark Rubinstein Ltd – The Tina Turner Musical</td>
            <td>Principal Dresser</td>
            <td>Dir. Phyllida Lloyd</td>
            <td>2021/22</td>
          </tr>
          <tr>
            <td>Royal Opera House – La Traviatat</td>
            <td>Costume Technician</td>
            <td>Dir. Richard Eyre</td>
            <td>2022</td>
          </tr>
          <tr>
            <td>Royal Opera House – Peter Grimes</td>
            <td>Costume Technician</td>
            <td>Dir. Deborah Warner</td>
            <td>2022</td>
          </tr>
          <tr>
            <td>Royal Opera House – Tosca</td>
            <td>Costume Technician</td>
            <td>Dir. Jonathan Kent</td>
            <td>2022</td>
          </tr>
          <tr>
            <td>Royal Opera House – Nabucco</td>
            <td>Costume Technician</td>
            <td>Dir. Daniele Abbado</td>
            <td>2022</td>
          </tr>
          <tr>
            <td>Royal Opera House – The Marriage of Figaro</td>
            <td>Costume Technician</td>
            <td>Dir. David McVicar</td>
            <td>2022</td>
          </tr>
          <tr>
            <td>Royal Opera House – The Nutcracker</td>
            <td>Costume Technician</td>
            <td>Chor. Peter Wright</td>
            <td>2021</td>
          </tr>
          <tr>
            <td>Royal Opera House – Macbeth</td>
            <td>Costume Technician</td>
            <td>Dir. Phyllida Lloyd</td>
            <td>2021</td>
          </tr>
        </tbody>
      </table>
      </div>

      <div className="subtitle">Off West End Theatre Credits</div>
      <div className="cv-table-wrapper">
          <table>
        <thead>
          <tr>
            <th>Venue/Production</th>
            <th>Role</th>
            <th>Director/Choreographer</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Soho Theatre – Liz Kingsman's One-Woman Show</td>
            <td>Set &amp; Costume Designer &amp; Maker</td>
            <td>Dir. Adam Brace</td>
            <td>2022</td>
          </tr>
          <tr>
            <td>Birmingham Royal Ballet – The Nutcracker</td>
            <td>Dresser</td>
            <td>Chor. Peter Wright</td>
            <td>2018</td>
          </tr>
          <tr>
            <td>Birmingham Royal Ballet – Polarity and Proximity</td>
            <td>Dresser</td>
            <td>Chor. Alexander Whitley, George Williamson, Twyla Tharp</td>
            <td>2018</td>
          </tr>
          <tr>
            <td>Birmingham Royal Ballet – Romeo and Juliet</td>
            <td>Dresser</td>
            <td>Chor. Kenneth MacMillan</td>
            <td>2018</td>
          </tr>
          <tr>
            <td>Hampstead Theatre – GLORIA</td>
            <td>Wardrobe Mistress</td>
            <td>Dir. Michael Longhurst</td>
            <td>2017</td>
          </tr>
          <tr>
            <td>Charing Cross Theatre – Death Takes a Holiday</td>
            <td>Wardrobe Assistant</td>
            <td>Dir. Thom Southerland</td>
            <td>2017</td>
          </tr>
        </tbody>
      </table>
      </div>
      

      <div className="subtitle">USA Theatre Credits</div>
      <div className="cv-table-wrapper">
          <table>
        <thead>
          <tr>
            <th>Venue/Production</th>
            <th>Role</th>
            <th>Director/Choreographer</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Shakespeare and Company, MA – Merry Wives of Windsor</td>
            <td>Wardrobe Mistress</td>
            <td>Dir. Kevin G. Coleman</td>
            <td>2019</td>
          </tr>
          <tr>
            <td>Shakespeare and Company, MA – As You Like It</td>
            <td>Wardrobe Mistress</td>
            <td>Dir. Allyn Burrows</td>
            <td>2018</td>
          </tr>
          <tr>
            <td>Shakespeare and Company, MA – Macbeth</td>
            <td>Wardrobe Mistress</td>
            <td>Dir. Melia Bensussen</td>
            <td>2018</td>
          </tr>
          <tr>
            <td>Uni of Massachusetts Amherst, MA – Mr Burns: A Post-Electric Play</td>
            <td>Mask Maker</td>
            <td>Dir. Michelle Hendrick</td>
            <td>2020</td>
          </tr>
          <tr>
            <td>Uni of Massachusetts Amherst, MA – The Water Station</td>
            <td>Draper</td>
            <td>Dir. Vishnupad Barve</td>
            <td>2020</td>
          </tr>
          <tr>
            <td>Uni of Massachusetts Amherst, MA – The Bacchae of Euripedes</td>
            <td>Costume Designer, Supervisor, Maker</td>
            <td>Dir. Iya Judyie Al-Bilali</td>
            <td>2019</td>
          </tr>
          <tr>
            <td>Queer and Now @ NYPOP, NYC – Stitcher</td>
            <td>Stitcher</td>
            <td>Dir. Garrett Sager</td>
            <td>2019</td>
          </tr>
          <tr>
            <td>Queer and Now @ NYPOP, NYC – Wild Thing</td>
            <td>Draper</td>
            <td>Dir. Gina Kaufmann</td>
            <td>2019</td>
          </tr>
          <tr>
            <td>Queer and Now @ NYPOP, NYC – What of the Night</td>
            <td>Draper</td>
            <td>Dir. Vishnupad Barve</td>
            <td>2018</td>
          </tr>
          <tr>
            <td>Queer and Now @ NYPOP, NYC – Snowflakes</td>
            <td>Costume Designer, Supervisor</td>
            <td>Dir. Gabriel Harrell</td>
            <td>2018</td>
          </tr>
          <tr>
            <td>Queer and Now @ NYPOP, NYC – The Lily's Revenge</td>
            <td>Draper, Stitcher</td>
            <td>Dir. Jen Onopa</td>
            <td>2018</td>
          </tr>
          <tr>
            <td>Queer and Now @ NYPOP, NYC – Infants of the Spring</td>
            <td>Stitcher, Wardrobe Mistress</td>
            <td>Dir. Ifa Bayeza</td>
            <td>2018</td>
          </tr>
          <tr>
            <td>Queer and Now @ NYPOP, NYC – Dream Play</td>
            <td>Assistant Costume Designer, Stitcher</td>
            <td>Dir. Corinne Miller</td>
            <td>2018</td>
          </tr>
          <tr>
            <td>Queer and Now @ NYPOP, NYC – Cadaver Exquisito</td>
            <td>Costume Designer</td>
            <td>Chor. Tom Vacanti and Leslie Frye</td>
            <td>2017</td>
          </tr>
          <tr>
            <td>Queer and Now @ NYPOP, NYC – Runaways</td>
            <td>Wardrobe Mistress</td>
            <td>Dir. Lou Moreno</td>
            <td>2017</td>
          </tr>
          <tr>
            <td>Cambridge American Stage Tour – The Taming of the Shrew</td>
            <td>Costume and Set Designer</td>
            <td>Dir. Kennedy Bloomer</td>
            <td>2015</td>
          </tr>
        </tbody>
      </table>
      </div>

      <div className="subtitle">Commercial Credits</div>
      <div className="cv-table-wrapper">
          <table>
        <thead>
          <tr>
            <th>Production</th>
            <th>Role</th>
            <th>Client/Agency</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hanna (Marketing Shoot)</td>
            <td>Wardrobe</td>
            <td>Amazon Prime</td>
            <td>2021</td>
          </tr>
          <tr>
            <td>Heineken Wind0.0w Service</td>
            <td>Costume Designer and Maker</td>
            <td>Heineken Ltd.</td>
            <td>2021</td>
          </tr>
        </tbody>
      </table>
      </div>
      <div className="subtitle">Education</div>
      <div className="cv-table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Qualification</th>
            <th>Institution</th>
            <th>Year(s)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Design and Technology, PGCE</td>
            <td>Goldsmiths College, University of London</td>
            <td>2020-2021</td>
          </tr>
          <tr>
            <td>Costume Design, MFA</td>
            <td>University of Massachusetts Amherst</td>
            <td>2017-2020</td>
          </tr>
          <tr>
            <td>Social Anthropology, BA Hons.</td>
            <td>University of Cambridge</td>
            <td>2012-2015</td>
          </tr>
        </tbody>
      </table>
      </div>

      <div className="subtitle">References</div>
      <div className="cv-table-wrapper">
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position/Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Amy Hathaway</td>
            <td>Head of Wardrobe, The Tina Turner Musical</td>
          </tr>
          <tr>
            <td>Amanda Hall</td>
            <td>Revival Workroom Manager, Royal Opera House</td>
          </tr>
          <tr>
            <td>Govane Lohbauer</td>
            <td>Costume Director, Shakespeare and Company</td>
          </tr>
          <tr>
            <td>Yao Chen</td>
            <td>Costume Design Professor, University of Mass. Amherst</td>
          </tr>
        </tbody>
      </table>
      </div>
      <div className='info'>
        Contact details available upon request.
      </div>
       <Helmet
          title="My CV | London Costume Desgin for Theatre and Film"
          description="Emma Hollows Desgin, I am a costume and set designer and maker currently working on London's West End"
          keywords="London's West-end, theatre, costume designer, costume maker, set designer, London, theatre"
        />
    </div>
  );
};

export default CV;

