import logo from './images/logo.svg';
import ava from './images/Image (2).png';
import farok from './images/image.png';
import watch from './images/watch.png';
import ava2 from './images/ava2.png';
import ear from './images/ear.png';
import ava3 from './images/Avatar2.png';
import iphone from './images/iphone.jpg'
import covid from './images/covid.png';
import ava4 from './images/ava4.png';
import iphone2 from './images/iphone2.png';
import ava5 from './images/ava5.png';
import not from './images/not.png';
import ava6 from './images/ava6.png';
import ava7 from './images/Avatar3.png'
import tr from './images/tr.png'
import food from './images/food.png'
import car from './images/car.png'
import camel from './images/camel.png'
import sea from './images/sea.png'
import end from './images/end.svg'
import './App.css';

function App() {
  return (
<div className="container">
  <section className='nav'>
    <img src={logo} alt="" />
    <div className="nav_links">
      <img src={ava} alt="" />
      <p>Brucee Lee</p>
      <i class="bi bi-chevron-down"></i>
      <div className="nav_icons">
         <i class="bi bi-gift"></i>
         <i class="bi bi-bell"></i>
       </div>
    </div>
    
  </section>

  <section className='hero'>
    <div className='hero_title'>
      <h2>5 mind blowing facts about the iPhone 14</h2>
      <div className='hero_author'><img src={farok} alt="" /> <p>Farok Rastegar  .  1 hour ago</p></div>
    </div>
  </section>

  <section className='articles'>
    <b>Featured articles</b>
    <div className="article_cards">

      <div className="article_card">
        <img src={watch} alt="" />
        <p>10 beaches you must visit</p>
        <div className="article_author">
          <img src={ava2} alt="" className='avatarka'/>
          <small>Farok Rastegar  .  1 hour ago</small>
        </div>
        <small>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the…</small>
      </div>
      
      <div className="article_card">
        <img src={ear} alt="" />
        <p>10 beaches you must visit</p>
        <div className="article_author">
          <img src={ava3} alt="" className='avatarka'/>
          <small>Farok Rastegar  .  1 hour ago</small>
        </div>
        <small>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the…</small>
      </div>

      <div className="article_card">
        <img src={iphone} alt="" className="iph"/>
        <p>10 beaches you must visit</p>
        <div className="article_author">
          <img src={ava2} alt="" className='avatarka'/>
          <small>Farok Rastegar  .  1 hour ago</small>
        </div>
        <small>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the…</small>
      </div>


      <div className="article_card">
        <img src={covid} alt="" />
        <p>10 beaches you must visit</p>
        <div className="article_author">
          <img src={ava4} alt="" className='avatarka'/>
          <small>Farok Rastegar  .  1 hour ago</small>
        </div>
        <small>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the…</small>
      </div>

      
      <div className="article_card">
        <img src={iphone2} alt="" />
        <p>10 beaches you must visit</p>
        <div className="article_author">
          <img src={ava5} alt="" className='avatarka'/>
          <small>Farok Rastegar  .  1 hour ago</small>
        </div>
        <small>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the…</small>
      </div>

      <div className="article_card">
        <img src={not} alt="" />
        <p>10 beaches you must visit</p>
        <div className="article_author">
          <img src={ava6} alt="" className='avatarka'/>
          <small>Farok Rastegar  .  1 hour ago</small>
        </div>
        <small>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the…</small>
      </div>
      
      

    </div>
  </section>

  <section className='take'>
    <div className="take_title">
      <a href="#">
      Featured
      </a>
      <b>Beached to take you somewhere else</b>
      <div className="article_author">
          <img src={ava7} alt="" className='avatarka'/>
          <small>Farok Rastegar  .  1 hour ago</small>
        </div>
    </div>
  </section>

  <section className='travel'>
  <b>Featured articles</b>

  <div className="travel_cards">
    <div className="travel_card">
      <img src={tr} alt="" />
      <div className="tr_title"> 
      <b>Pathway to the Mediterranean</b>
        <div className="article_author">
          <img src={ava7} alt="" className='avatarka'/>
          <small>Farok Rastegar  .  1 hour ago</small>
        </div>
          <small>
            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…
          </small>
      </div>
    </div>

    <div className="travel_card">
      <img src={food} alt="" />
      <div className="tr_title"> 
      <b>My awesome safari in Lahbab Desert, United Arab Emirates</b>
        <div className="article_author">
          <img src={ava7} alt="" className='avatarka'/>
          <small>Farok Rastegar  .  1 hour ago</small>
        </div>
          <small>
            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…
          </small>
      </div>
    </div>

    <div className="travel_card">
      <img src={car} alt="" />
      <div className="tr_title"> 
      <b>10 amazing things to do in Cuba</b>
        <div className="article_author">
          <img src={ava7} alt="" className='avatarka'/>
          <small>Farok Rastegar  .  1 hour ago</small>
        </div>
          <small>
            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…
          </small>
      </div>
    </div>

    <div className="travel_card">
      <img src={camel} alt="" />
      <div className="tr_title"> 
      <b>The best street food in the world. Ranked!</b>
        <div className="article_author">
          <img src={ava7} alt="" className='avatarka'/>
          <small>Farok Rastegar  .  1 hour ago</small>
        </div>
          <small>
            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…
          </small>
      </div>
    </div>

    <div className="travel_card">
      <img src={sea} alt="" />
      <div className="tr_title"> 
      <b>Travel Packing guide for beginners</b>
        <div className="article_author">
          <img src={ava7} alt="" className='avatarka'/>
          <small>Farok Rastegar  .  1 hour ago</small>
        </div>
          <small>
            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…
          </small>
      </div>
    </div>

    <a href="#" className='tr_link'>Load more</a>
  </div>
  </section>

  <section className='inbox'>
    <div className="inbox_title">
      <b>Incredible deals, right to your inbox!</b>
      <input type="text" placeholder='Placeholder' className='inbox_input' /><button className='inbox_btn'><i class="bi bi-chevron-down"></i></button>
      <small className='inbox_small'>By joining you agree to our Terms and Conditions</small>
    </div>
  </section>

  <section className='footer'>
     <div className='footer_links'>
      <div className='footer_link'>
      <b>First Column</b>
      <ul>
        <li>Link One</li>
        <li>Link Two</li>
        <li>Link Three</li>
        <li>Link Four</li>
      </ul>
      </div>

      <div className='footer_link'>
      <b>Second Column</b>
      <ul>
        <li>Link One</li>
        <li>Link Two</li>
        <li>Link Three</li>
        <li>Link Four</li>
      </ul>
      </div>

      <div className='footer_link'>
      <b>Third Column</b>
      <ul>
        <li>Link One</li>
        <li>Link Two</li>
        <li>Link Three</li>
        <li>Link Four</li>
      </ul>
      </div>

      <div className='footer_link'>
      <b>Fourth Column</b>
      <ul>
        <li>Link One</li>
        <li>Link Two</li>
        <li>Link Three</li>
        <li>Link Four</li>
      </ul>
      </div>
      <div className='ftr'>
      <p>Never miss an update</p>
         <div className='inp'>
            <input type="text" placeholder='Placeholder' className='footer_input' /><button className='footer_btn'><i class="bi bi-chevron-down"></i></button>
         </div>
      </div>
     </div>
  </section>

  <section className='end'>
    <img src={end} alt="" />
    <p>© 2019 Fabrx </p>
    <div className='end_links'>
    <i class="bi bi-facebook"></i>
    <i class="bi bi-instagram"></i>
    <i class="bi bi-twitter"></i>
    <i class="bi bi-behance"></i>
    </div>
  </section>
</div>
  );
}

export default App;
