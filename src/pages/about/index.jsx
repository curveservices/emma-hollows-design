import emma1 from '../../assets/images/emma1.webp';
import Button from '../../components/button';
import useScrollStates from '../../components/scrollState';
import Helmet from '../../components/helmet';
import './index.scss';

const About = () => {
  const { second } = useScrollStates();
  const schemData = {
    "@context": "https://schema.org",
    "@type": "Website",
    "name": "Emma Hollows Desgin",
    "url": "https://emmahollows.co.uk",
    "description": "Costume designer, maker and supervisor for theatre and film in London.",
    "author": {
      "@type": "Person",
      "name": "Emma Hollows"
    }
  };
  return (
    <div className="about-page">
      <div className="hero-about">
        <div className="text-box">
          <h1 className="">Costume Designer and Supervisor</h1>
        </div>
      </div>
      <section className="about-hero">
        <div className="hero-left">
          <img
            src={emma1}
            alt="Emma Hollows Design, Costume designer, West-end London"
            className="portrait-image image-left"
          />
        </div>
        <div className="hero-right">
          <p>
            I have been working in the theatre industry for the past decade both
            in the UK and internationally, including productions on the West
            End, Broadway, UK Tours and the Sydney Opera House. My experience
            ranges from opera to musicals to plays to dance and has included
            roles in design, supervising, making and wardrobe.
          </p>
          <p>
            My interest in theatre began as a child performing in school plays,
            local theatre groups and choirs. After falling in love with Textiles
            at school, I sought to fuse these two interests by pursuing costume
            design. I studied Social Anthropology at the University of Cambridge
            where I worked on productions alongside the likes of Toby Marlow and
            Lucy Moss and did a number of productions with the esteemed
            Cambridge Footlights. My degree took me to India for a summer where
            I researched performing arts in Kerala, comparing the costumes and
            make up of Kathakali and Pulikali.
          </p>
        </div>
      </section>
      <section className={`second-section ${second ? "anim" : "none"}`}>
        <div className="second-left">
          <p>
            After graduation, I moved to London and began working in the theatre
            industry designing for fringe productions and working in the
            wardrobe departments of venues such as the Hampstead Theatre and
            Charing Cross Theatre. In 2017 I was offered a full scholarship at
            University of Massachusetts Amherst to study a 3 year masters in
            Costume Design. This led to work with Shakespeare and Company, the
            University of Connecticut, the Birmingham Royal Ballet and
            performing at NYPOP in NYC. My studies took me to South Africa for a
            summer where I attended the National Arts Festival in Makhanda and
            conducted research into the jazz era musical Sophiatown. I held an
            exhibition on the costume design of the musical at the Augusta
            Savage Gallery in 2020 (subsequently moved online due to the COVID
            pandemic).
          </p>
          <p>
            During the pandemic I returned to London and got a PGCE to teach
            Design and Technology. When theatres reopened I began working at
            West End's <b>Tina: The Tina Turner Musical</b> and the Royal Opera
            House. Soon I was assisting Costume Supervisors on <b>Tina</b>,{" "}
            <b>Back to the Future, Jersey Boys</b>, Disney's <b>Aladdin</b>, and
            ROH's premier productions of <b>Alcina</b> and <b>Carmen</b>. In the
            last couple of years I have supervised the UK tour of{" "}
            <b>The Bodyguard Musical; Liz Kingsman's One Woman Show</b> for Soho
            Theatre, the West End, NYC and Sydney Opera House; and most recently
            the Olivier Award winning Best New Musical{" "}
            <b>The Curious Case of Benjamin Button</b>. I am currently the
            Costume Supervisor on the revival production of <b>Carmen</b> at the
            Royal Opera House and will be following the production to Teatro
            Real in Madrid later this year.
          </p>
        </div>
      </section>
      <section className={`third-section`}>
        <div className="text-box">
          <div className="btn-container">
            <Button
              link="/EmmaHollowsCV.pdf"
              text="Download my CV"
              target="_blank"
            />
          </div>
        </div>

        <div className="subtitle">2025</div>
        <div className="cv-table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Production - Venue</th>
                <th>Role</th>
                <th>Director</th>
                <th>Costume Designer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Last Days - Royal Opera House</td>
                <td>Costume Supervisor</td>
                <td>Anna Morrissey and Matt Copson</td>
                <td>TBC</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>Carmen - Teatro Real, Madrid</td>
                <td>Asst Costume Designer</td>
                <td>Damiano Michieletto</td>
                <td>Carla Teti</td>
              </tr>
              <tr>
                <td>Carmen - Royal Opera House</td>
                <td>Costume Supervisor</td>
                <td>Damiano Michieletto</td>
                <td>Carla Teti</td>
              </tr>
              <tr>
                <td>DocDoc - Churchill Theatre, Bromley</td>
                <td>Costume Supervisor</td>
                <td>Ian Talbot</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="subtitle">2024</div>
        <div className="cv-table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Production - Venue</th>
                <th>Role</th>
                <th>Director</th>
                <th>Costume Designer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  The Curious Case of Benjimin Button - Ambassadors Theatre
                </td>
                <td>Costume Supervisor</td>
                <td>Jethro Compton</td>
                <td>Anna Kelsey</td>
              </tr>
              <tr>
                <td>Curlew River - Snape Maltings</td>
                <td>Costume Supervisor</td>
                <td>Deborah Warner</td>
                <td>Christof Hetzer</td>
              </tr>
              <tr>
                <td>Carmen - Royal Opera House</td>
                <td>Asst Costume Supervisor</td>
                <td>Damiano Michieletto</td>
                <td>Carla Teti</td>
              </tr>
              <tr>
                <td>
                  When Atlas Met Tantalus - Greenwich, Bridge House, Lion &
                  unicorn Theatre
                </td>
                <td>Costume Designer</td>
                <td>Emily Layton - Tiff Milner</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="subtitle">2023</div>
        <div className="cv-table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Production - Venue</th>
                <th>Role</th>
                <th>Director</th>
                <th>Costume Designer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Aladdin - UK Tour</td>
                <td>Asst Costume Designer</td>
                <td>Casey Nicholaw</td>
                <td>Gregg Barnes</td>
              </tr>
              <tr>
                <td>Jersey Boys - Trafalgar Theatre</td>
                <td>Asst Costume Designer</td>
                <td>Des McAnuff</td>
                <td>Jess Goldstein</td>
              </tr>
              <tr>
                <td>Tina: The Tina Turner Musical - Aldwych Theatre</td>
                <td>Asst Costume Supervisor</td>
                <td>Phyllida Lloyd</td>
                <td>Mark Thompson</td>
              </tr>
              <tr>
                <td>
                  The Curious Case of Benjamin Button - Southwark Playhouse
                  Elephant
                </td>
                <td>Costume Supervisor</td>
                <td>Jethro Compton</td>
                <td>Anna Kelsey</td>
              </tr>
              <tr>
                <td>
                  Back to the Future: The Musical - Winter Garden Theatre, NYC
                </td>
                <td>Asst Costume Supervisor</td>
                <td>John Rando</td>
                <td>Tim Hatley</td>
              </tr>
              <tr>
                <td>
                  Liz Kingsman's One Woman Show - Ambassadors Theatre, Sydney
                  Opera House & Greenwich House Theatre, NYC
                </td>
                <td>Costume Supervisor</td>
                <td>Adam Brace</td>
                <td>Chloe Lamford</td>
              </tr>
              <tr>
                <td>The Bodyguard - UK Tour</td>
                <td>Costume Supervisor</td>
                <td>Thea Sharrock</td>
                <td>Tim Hatley</td>
              </tr>
              <tr>
                <td>A Midsummer Night's Dream - Opera Holland Park</td>
                <td>Costume & Set Designer</td>
                <td>Sam Rayner</td>
                <td>Emma Hollows</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="subtitle">2022</div>
        <div className="cv-table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Production - Venue</th>
                <th>Role</th>
                <th>Director</th>
                <th>Costume Designer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alcina - Royal Opera House</td>
                <td>Asst Costume Supervisor</td>
                <td>Richard Jones</td>
                <td>Antony McDonald</td>
              </tr>
              <tr>
                <td>Liz Kingsman's One Woman Show - Soho Theatre</td>
                <td>Asst Set & Costume Designer</td>
                <td>Adam Brace</td>
                <td>Chloe Lamford</td>
              </tr>
              <tr>
                <td>Serse - Opera Holland Park</td>
                <td>Set & Costume Designer</td>
                <td>Sam Rayner</td>
                <td>Emma Hollows</td>
              </tr>
              <tr>
                <td>Tina: The Tina Turner Musical - Aldwych Theatre</td>
                <td>Principal Dresser (2021 - 2022)</td>
                <td>Phyllida Lloyd</td>
                <td>Mark Thompson</td>
              </tr>
              <tr>
                <td>Singin' in the Rain - UK Tour</td>
                <td>Dep Wardrobe Asst</td>
                <td>Jonathan Church</td>
                <td>Simon Higlett</td>
              </tr>
              <tr>
                <td>Blubber - The Roundhouse</td>
                <td>Costume Maker</td>
                <td>Rafaella Marcus</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="subtitle">2021</div>
        <div className="cv-table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Production - Venue</th>
                <th>Role</th>
                <th>Director/Agency</th>
                <th>Costume Designer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>The Nutcracker - Royal Opera House</td>
                <td>Costume Technician</td>
                <td>Sir Peter Wright</td>
                <td>Julia Trevelyan Oman</td>
              </tr>
              <tr>
                <td>Macbeth - Royal Opera House</td>
                <td>Costume Technician</td>
                <td>Phyllida Lloyd</td>
                <td>Anthony Ward</td>
              </tr>
              <tr>
                <td>Heineken Wind0.0w Service - Commercial</td>
                <td>Costume Desiner & Maker</td>
                <td>Heineken Ltd/COW PR</td>
                <td>Emma Hollows</td>
              </tr>
              <tr>
                <td>It Takes Two</td>
                <td>Costume Designer</td>
                <td>Nott Brothers</td>
                <td>Emma Hollows</td>
              </tr>
              <tr>
                <td>Hanna 3 - Commercial Shoot</td>
                <td>Dresser</td>
                <td>Amazon Prime</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="subtitle">Awards and Distinctions</div>
        <ul>
          <li>Augusta Savage Gallery Outhreach Exhibition 2020</li>
          <li>
            University of Massachusetts Amherst Department of Theatre Travel
            Grant 2020
          </li>
          <li>University of Massachusetts Amhurst Arts Council Grant 2019</li>
          <li>
            University of Massachusetts Amhurst Graduate School Dissertation
            Research Grant 2019
          </li>
          <li>
            University of Massachusetts Amhurst College of Humanities and Fine
            Arts Grant 2019
          </li>
          <li>
            University of Massachusetts Amhurst Department of Theatre Travel
            Grant 1029
          </li>
          <li>
            University of Massachusetts Amhurst Department of Theatre Travel
            Grant 2018
          </li>
          <li>The Mary Euphrasia Mosley Fund 2014</li>
          <li>Homerton College Research Grant 2014</li>
        </ul>

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

        <div className="info">Contact details available upon request.</div>
      </section>
      <Helmet
        title="About Me | London Costume Desgin for Theatre and Film"
        description="I am a costume and set designer and maker currently working on London's West End"
        keywords="West-end theatre, costume designer, costume maker, London, theatre"
        schemaMarkup={schemData}
      />
    </div>
  );
}

export default About
