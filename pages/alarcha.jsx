import React from 'react'
import styles from '../styles/Home.module.scss'
const Alarcha = () => {
  return (
   
      <div className={styles.main}>
 <div className={styles.alarcha} >
 <h1>Ala Archa Ratcek Hut Overnight Hike</h1>
<p>Join Apple Hostel on one of our most popular hikes close to Bishkek. Ratcek Hut was named after a soviet alpinist- Ratcek Vladimir – who initiated the construction of the hut when he was managing  the Kyrgyz Club of Alpinism and Tourism in the 1930s.</p>
<p>You’ll hike up a path that is surrounded by spectacular wildlife and heaps of wildlife on your way up to the famous Ratcek hut. One at the summit, settle down next to a warm fire with a few drinks in the wooden hut which is situated next to Aksai glacier in Ala-Archa National Park.</p>
<p>The trek will start with a transfer from Bishkek to Alplager, before embarking on the 5-6 hour hike up Ratcek Hut. Bring plenty of snacks and water/drinks with you! After a night under the crystal clear stars, begin your amble descent back down to Alplager in the morning before heading back to Bishkek via a private transfer.</p>

<div className={styles.galerry}>
    <img src="https://i.ibb.co/s2fZZQb/Rectangle-57.jpg" alt=""  />
    <img src="https://i.ibb.co/B31gn4W/Rectangle-58.jpg" alt="" />
    <img src="https://i.ibb.co/dfWZDyt/Rectangle-59.jpg" alt=""  />
    <img src="https://i.ibb.co/8x4MrFr/Rectangle-60.jpg" alt="" />
</div>
<h3> Itinerary</h3>
<li>Day 1: Transfer from Bishkek to Alplager by car. Start the hike at 2200 m above sea level. Hiking for 5-6 hours to reach the hut at 3300 m above the sea level. Snacks for lunch. Dinner & Camping.</li>
<li>Day 2 : Hike back down to Alplager. Snacks for breakfast and lunch. Transfer back to the city.</li>
   
   <h3>Tour Cost</h3>

   <ul className={styles.cost}>
   <li>1 person:</li><p>14,600 som</p>
   <li>2 person:</li><p>8,400 som per person</p>
   <li>3 person:</li><p>6,500 som per person</p>
   <li>4 person:</li><p>4,200 som per person</p>
   </ul>

   <h3>Included</h3>
   <h3>Guide</h3>
   <p>Our local expert will guide you through and be on hand to answer any questions you might have.</p>
    
    <h3>Transport</h3>
    <p>Transport to and from Ala-Archa as well as the park entrance fees.</p>
    
    <h3>Not Included</h3>
    <p>Food and camping equipment rental</p>
    
    <h3>Duration </h3>
    <p>2 Days 1 Night</p>
    
    <h3>Suggested Equipment</h3>

    <li>trekking boots/gaiters,</li>
    <li>weatherproof warm clothes</li>
    <li>hat/trekking poles</li>
    <li>sunscreen</li>
    <li>sunglasses</li>
    <li>rain coat</li>
    
    <div className={styles.can}>
      <h4>You can rent any equipment you might need </h4>
      <button> Equipment Rentsl</button></div>
 </div>
    </div>
   
  )
}

export default Alarcha