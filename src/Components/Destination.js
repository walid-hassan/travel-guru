import { Container, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import BlackHeader from './BlackHeader';
import Sunder from '../Image/sunder.jpg';
import './Destination.css';
import Cox from "../Image/cox.jpeg";
import Mangol from '../Image/sreemangol.jpg'

const Destination = () => {
    const [pic, setPic] = useState([]);
    useEffect(() => {
        const api = "https://pixabay.com/api/?key=17978428-b21ef67d248e2412359fc460a&q=bangladesh&image_type=photo&pretty=true";
        fetch (api)
        .then( res => res.json())
        .then( data => {
            const topPics = data.hits.slice(2, 18);
            setPic(topPics);
        })
    }, [])
    console.log(pic);
    return (
        <div>
            <BlackHeader/>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid  item md={4}>
                        <img className="placeImg" src={Sunder} alt=""/>
                    </Grid>
                    <Grid style={{
                        fontSize:"14px",
                        padding:" 0 20px 20px 20px",
                        color:"gray"
                    }} item md={8}>
                        <h2 style={{textTransform:"uppercase", color:"#6a4949"}}>Sundarbans</h2>
                        <p>The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh. It comprises closed and open mangrove forests, agriculturally used land, mudflats and barren land, and is intersected by multiple tidal streams and channels. Four protected areas in the Sundarbans are enlisted as UNESCO World Heritage Sites, viz. Sundarbans National Park, Sundarbans West, Sundarbans South and Sundarbans East Wildlife Sanctuaries.[3] Despite these protections, the Indian Sundarbans were considered endangered in a 2020 assessment under the IUCN Red List of Ecosystems framework.[4] <br/><br/>

                        The Sundarbans mangrove forest covers an area of about 10,000 km2 (3,900 sq mi), of which forests in Bangladesh's Khulna Division extend over 6,017 km2 (2,323 sq mi) and in West Bengal, they extend over 4,260 km2 (1,640 sq mi) across the South 24 Parganas and North 24 Parganas districts.[5] The most abundant tree species are sundri (Heritiera fomes) and gewa (Excoecaria agallocha). The forests provide habitat to 453 faunal wildlife, including 290 bird, 120 fish, 42 mammal, 35 reptile and eight amphibian species.[6]<br/><br/>

                        Despite a total ban on all killing or capture of wildlife other than fish and some invertebrates, it appears that there is a consistent pattern of depleted biodiversity or loss of species in the 20th century, and that the ecological quality of the forest is declining.[7] The Directorate of Forest is responsible for the administration and management of Sundarban National Park in West Bengal. In Bangladesh, a Forest Circle was created in 1993 to preserve the forest, and Chief Conservators of Forests have been posted since. Despite preservation commitments from both Governments, the Sunderbans are under threat from both natural and human-made causes. In 2007, the landfall of Cyclone Sidr damaged around 40% of the Sundarbans. The forest is also suffering from increased salinity due to rising sea levels and reduced freshwater supply. Again in May 2009 Cyclone Aila devastated Sundarban with massive casualties. At least 100,000 people were affected by this cyclone.[8][9] The proposed coal-fired Rampal power station situated 14 km (8.7 mi) north of the Sundarbans at Rampal Upazila of Bagerhat District in Khulna, Bangladesh, is anticipated to further damage this unique mangrove forest according to a 2016 report by UNESCO.[10] </p>
                    </Grid>
                    <Grid style={{
                        fontSize:"14px",
                        padding:" 20px",
                        color:"gray"
                    }} item md={8}>
                        <h2 style={{textTransform:"uppercase", color:"#6a4949"}}>Cox's Bazar</h2>
                        <p>Cox's Bazar (Bengali: কক্সবাজার, pronounced [kɔksbadʒaɾ]) is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it is infamous for the largest refugee camp in the world. It is located 150 km (93 mi) south of the divisional headquarter city of Chittagong. Cox's Bazar is also known by the name Panowa, which translates literally as "yellow flower". Another old name was "Palongkee". <br/><br/>

                        The modern Cox's Bazar derives its name from Captain Hiram Cox, an officer of the British East India Company, a Superintendent of Palongkee outpost. To commemorate his role in refugee rehabilitation work, a market was established and named after him.

                        The municipality covers an area of 6.85 km2 (2.64 sq mi) with 27 mahallas and 9 wards and as of 2012 had a population of 51,918.[2] Cox's Bazar is connected by road and air with Chittagong.[3][4] 
                        Cox's Bazar is located 150 km (93 mi) south of the divisional headquarter city of Chittagong.Cox's Bazar town has an area of 6.85 km2 (2.64 sq mi), and is bounded by Bakkhali River on the north and East, Bay of Bengal in the West, and Jhilwanj Union in the south.[12]<br/><br/>

                        The beach in Cox's Bazar has a gentle slope and with an unbroken length of 155 km (96 mi) it is often termed the "longest natural unbroken sea beach" in the world.
                        Cox's Bazar lies on a coastal plain in the southeastern corner of Bangladesh. From above, the plain appears to bulge out into the Bay of Bengal. Along the shore is an extensive area of beach and dunes. Most of the city is built on a floodplain that is lower in elevation than the dunes, making it more susceptible to flooding due to cyclones and storm surges. The Cox's Bazar coastal plain was formed after the sea reached its present level around 6,500 years ago, with the area of the current floodplain originally forming a sediment sink that has since been gradually filled in by the Bakkhali river as well as smaller streams coming down from the hills.[13] </p>
                    </Grid>
                    <Grid style={{paddingTop:"55px"}}  item md={4}>
                        <img className="placeImg" src={Cox} alt=""/>
                    </Grid>
                    <Grid style={{paddingTop:"20px"}}  item md={4}>
                        <img className="placeImg" src={Mangol} alt=""/>
                    </Grid>
                    <Grid style={{
                        fontSize:"14px",
                        padding:" 20px",
                        color:"gray"
                    }} item md={8}>
                        <h2 style={{textTransform:"uppercase", color:"#6a4949"}}>Sreemangal</h2>
                        <p>Sreemangal (Bengali: শ্রীমঙ্গল, romanized: Srimongol) is an Upazila of Moulvibazar District[1] in the Sylhet Division of Bangladesh. <br/><br/>
                        It is said the name Sreemangal (or Srimangal) is named after Sri Das and Mangal Das; two brothers who settled on the banks of the Hail Haor.[2] A copper plate of Raja Marundanath from the 11th century was found in Kalapur. During an excavation at Lamua, an ancient statue of Ananta Narayan was dug out. In 1454, the Nirmai Shiva Bari was built and still stands today. Srimangal thana was established in 1912. The central town later became a pourashava in 1935. In 1963, two peasants were killed by police officers which kicked off the Balishira peasant riots. During the Bangladesh Liberation War of 1971, the Pakistani army reached Srimangal on 30 April setting houses on fire and committing atrocities against women. The East Pakistan Rifles camp and Wapda office premises were among the two mass killing sites. Two mass graves remain in Bharaura with a memorial in North Bharaura.[1]<br/></p>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Destination;