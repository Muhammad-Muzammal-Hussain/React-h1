import React, { Component } from 'react'
// import NewsItem from '../Newitem/Newsitem'
import Newsitem from '../Newitem/Newsitem'
import Spinner from '../Spinner/Spinner';
import './News.css'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
static defaultProps={
  country:'pak',
  pageSize:8,
  category:"general"
} 
static propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string,
}
    
    // articles= [
    // {
    // "source": {
    // "id": "cnn",
    // "name": "CNN"
    // },
    // "author": "Ella Nilsen",
    // "title": "Biden administration moves ahead with massive Gulf of Mexico drilling auction, weeks after approving Willow Project - CNN",
    // "description": "A few weeks after allowing the controversial Willow oil drilling project in Alaska to go forward, the Biden administration is auctioning off more than 73 million acres of waters in the Gulf of Mexico to offshore oil and gas drilling.",
    // "url": "https://www.cnn.com/2023/03/29/politics/gulf-of-mexico-drilling-lease-sale-biden-climate/index.html",
    // "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230328154152-gulf-of-mexico-drilling-lease-sale-biden-climate.jpg?c=16x9&q=w_800,c_fill",
    // "publishedAt": "2023-03-29T11:54:00Z",
    // "content": "A few weeks after allowing the controversial Willow oil drilling project in Alaska to go forward, the Biden administration is auctioning off more than 73 million acres of waters in the Gulf of Mexico… [+3992 chars]"
    // },
    // {
    // "source": {
    // "id": null,
    // "name": "Daily Beast"
    // },
    // "author": "Allison Quinn",
    // "title": "Kremlin Stoops to New Low in Batshit Case Against Anti-War Single Dad - Yahoo News",
    // "description": "Alexei Babushkin/Kremlin/Sputnik/ReutersThe Kremlin has broken its silence on the case of a single father sentenced to prison after his daughter’s anti-war...",
    // "url": "https://www.thedailybeast.com/kremlin-stoops-to-new-low-with-attack-on-single-father-alexei-moskalev",
    // "urlToImage": "https://media.zenfs.com/en/thedailybeast.com/fa1006318d3f9c8005a1e78ecafad769",
    // "publishedAt": "2023-03-29T11:50:52Z",
    // "content": "Alexei Babushkin/Kremlin/Sputnik/Reuters\r\nThe Kremlin has broken its silence on the case of a single father sentenced to prison after his daughters anti-war drawing provoked the wrath of Vladimir Put… [+2521 chars]"
    // },
    // {
    // "source": {
    // "id": "independent",
    // "name": "Independent"
    // },
    // "author": "Andrea Blanco",
    // "title": "Online sleuth uncovers group chat amid hunt for GoPro video from Gwyneth Paltrow ski collision - The Independent",
    // "description": "Tech investigator Michael Fletcher says it only took two minutes to access a link attorneys on both sides thought to be faulty",
    // "url": "https://www.independent.co.uk/news/world/americas/gwyneth-paltrow-ski-crash-incident-video-b2310025.html",
    // "urlToImage": "https://static.independent.co.uk/2023/03/28/17/27-e0ad82f83345438881a00daa78a04a12.jpg?quality=75&width=1200&auto=webp",
    // "publishedAt": "2023-03-29T11:44:14Z",
    // "content": "Sign up to our Evening Headlines email for your daily guide to the latest news\r\nSign up to our free US Evening Headlines email\r\nAfter much speculation surrounding a broken link, an online sleuth unco… [+4910 chars]"
    // },
    // {
    // "source": {
    // "id": "cnn",
    // "name": "CNN"
    // },
    // "author": "Annette Choi",
    // "title": "Guns lead as most common cause of death for children and teens in the US - CNN",
    // "description": "Guns are the leading cause of death for US children and teens, since surpassing car accidents in 2020.",
    // "url": "https://www.cnn.com/2023/03/29/health/us-children-gun-deaths-dg/index.html",
    // "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230328192428-20230328-children-gun-deaths-card.png?c=16x9&q=w_800,c_fill",
    // "publishedAt": "2023-03-29T11:42:00Z",
    // "content": "Guns are the leading cause of death for US children and teens, since surpassing car accidents in 2020. \r\nFirearms accounted for nearly 19% of childhood deaths (ages 1-18) in 2021, according to the Ce… [+1090 chars]"
    // },
    // {
    // "source": {
    // "id": null,
    // "name": "fox8.com"
    // },
    // "author": "Associated Press",
    // "title": "Police search for tiger stolen from home in northern Mexico - WJW FOX 8 News Cleveland",
    // "description": "Northern Mexico has developed such a habit of exotic animals and violence, that people not only keep tigers as pets, but they also steal them.",
    // "url": "https://fox8.com/news/police-search-for-tiger-stolen-from-home-in-northern-mexico/",
    // "urlToImage": "https://fox8.com/wp-content/uploads/sites/12/2023/03/GettyImages-56692481.jpg?w=1280",
    // "publishedAt": "2023-03-29T10:34:23Z",
    // "content": "MEXICO CITY (AP) Northern Mexico has developed such a habit of exotic animals and violence, that people not only keep tigers as pets, but they also steal them.\r\nProsecutors in the violent northern st… [+629 chars]"
    // },
    // {
    // "source": {
    // "id": null,
    // "name": "CNBC"
    // },
    // "author": "Eamon Javers",
    // "title": "Credit Suisse whistleblowers say Swiss bank has been helping wealthy Americans dodge U.S. taxes for years - CNBC",
    // "description": "The bank notoriously pleaded guilty in 2014 to criminal charges for \"knowingly and willfully\" helping U.S. clients hide offshore assets and income from the IRS.",
    // "url": "https://www.cnbc.com/2023/03/29/credit-suisse-whistleblowers-say-bank-has-been-helping-americans-dodge-us-taxes.html",
    // "urlToImage": "https://image.cnbcfm.com/api/v1/image/107211522-1679321808155-gettyimages-1248849528-AFP_33BN9ZJ.jpeg?v=1680085801&w=1920&h=1080",
    // "publishedAt": "2023-03-29T10:30:01Z",
    // "content": "Credit Suisse, the collapsed Swiss bank taken over by UBS Group in a hastily arranged bailout earlier this month, may bring with it a fresh set of regulatory and legal problems for its new owner.\r\nFo… [+13777 chars]"
    // },
    // {
    // "source": {
    // "id": "the-hill",
    // "name": "The Hill"
    // },
    // "author": "Alexander Bolton, Emily Brooks",
    // "title": "McCarthy tries to drag Biden to negotiating table on debt limit - The Hill",
    // "description": "Speaker Kevin McCarthy (R-Calif.) is trying to ramp up pressure on President Biden to negotiate a package of fiscal reforms in exchange for raising the debt limit, but Democrats still refuse to sit down with him, setting the stage for a high-stakes standoff t…",
    // "url": "https://thehill.com/homenews/house/3922774-mccarthy-tries-to-drag-biden-to-negotiating-table-on-debt-limit/",
    // "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2023/03/bidenjoe_mccarthykevin_031723gn04_w.jpg?w=1280",
    // "publishedAt": "2023-03-29T10:00:00Z",
    // "content": "Skip to content\r\nSpeaker Kevin McCarthy (R-Calif.) is trying to ramp up pressure on President Biden to negotiate a package of fiscal reforms in exchange for raising the debt limit, but Democrats stil… [+7068 chars]"
    // },
    // {
    // "source": {
    // "id": null,
    // "name": "FiveThirtyEight"
    // },
    // "author": "Jay Boice",
    // "title": "2023 MLB Predictions | FiveThirtyEight - FiveThirtyEight",
    // "description": "FiveThirtyEight's MLB forecast uses a pitcher-adjusted Elo model to project the winner of every game and the chances that each team will win the World Series.",
    // "url": "https://projects.fivethirtyeight.com/2023-mlb-predictions/",
    // "urlToImage": "https://fivethirtyeight.com/wp-content/uploads/2023/03/MLB-2023-promo_16x9.png",
    // "publishedAt": "2023-03-29T10:00:00Z",
    // "content": "How this works: Elo ratings are a measure of team strength based on head-to-head results, margin of victory and quality of opponent. Were using an Elo-based system that also accounts for starting pit… [+253 chars]"
    // },
    // {
    // "source": {
    // "id": "fox-news",
    // "name": "Fox News"
    // },
    // "author": "Lawrence Richard",
    // "title": "Kamala Harris set to unveil $1 billion plan in Ghana to promote women’s economic empowerment - Fox News",
    // "description": "In Ghana, Vice President Kamala Harris will reveal a $1 billion plan to help bolster the country's economy as Washington looks to build relationships across Africa.",
    // "url": "https://www.foxnews.com/world/kamala-harris-set-unveil-1-billion-plan-ghana-promote-womens-economic-empowerment",
    // "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/03/AP23087461684513.jpg",
    // "publishedAt": "2023-03-29T09:59:00Z",
    // "content": "Vice President Kamala Harris is set to unveil a $1 billion initiative to promote womens economic empowerment in the country of Ghana, where she has spent several days touring and meeting with governm… [+3167 chars]"
    // },
    // {
    // "source": {
    // "id": "cnn",
    // "name": "CNN"
    // },
    // "author": "Nouran Salahieh",
    // "title": "Heartbroken Nashville community grapples with school shooting as police uncover more details about the shooter - CNN",
    // "description": "As a heartbroken Nashville community grapples with the mass shooting that claimed the lives of three 9-year-old children and three adults at a private Christian school, police are uncovering more details about the 28-year-old shooter.",
    // "url": "https://www.cnn.com/2023/03/29/us/covenant-school-shooting-nashville-tennessee-wednesday/index.html",
    // "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230328220028-20-nashville-school-shooting-0327.jpg?c=16x9&q=w_800,c_fill",
    // "publishedAt": "2023-03-29T09:47:00Z",
    // "content": "Editors Note: This story contains graphic descriptions of violence.\r\nAs a heartbroken Nashville community grapples with the mass shooting that claimed the lives of three 9-year-old children and three… [+7991 chars]"
    // },
    // {
    // "source": {
    // "id": null,
    // "name": "The Athletic"
    // },
    // "author": "Dane Brugler, Nick Baumgardner, Diante Lee, Nate Tice",
    // "title": "NFL Draft 2023 Big Board: The Athletic’s updated top 100 prospect rankings - The Athletic",
    // "description": "An interactive look at NFL draft expert Dane Brugler's top prospects including player profiles, combine measurements, key stats and more.",
    // "url": "https://theathletic.com/4307966/2023/03/29/nfl-draft-2023-prospect-rankings-board/",
    // "urlToImage": "https://cdn.theathletic.com/app/uploads/2023/03/27144614/0322_Top100-1-scaled.jpg",
    // "publishedAt": "2023-03-29T09:01:55Z",
    // "content": "Welcome to our 2023 NFL Draft board, a new look at Dane Bruglers top 100 prospects. These are the players who we predict will hear their names called the earliest during the three-day, seven-round dr… [+5284 chars]"
    // },
    // {
    // "source": {
    // "id": null,
    // "name": "The Guardian"
    // },
    // "author": "Tom Phillips",
    // "title": "At least 40 dead in Mexico migrant centre fire as rights groups blame overcrowding - The Guardian",
    // "description": "Mexico’s president says fire was caused by migrants lighting mattresses in protest at planned deportations",
    // "url": "https://www.theguardian.com/world/2023/mar/29/mexico-migrant-facility-fire-deaths-ciudad-juarez",
    // "urlToImage": "https://i.guim.co.uk/img/media/a50b77865b1221f21c97f1e9f30192ffc1054207/0_57_5000_3001/master/5000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=b4889c728b1398f3aa04cb81c294a4b7",
    // "publishedAt": "2023-03-29T08:18:00Z",
    // "content": "Rights groups have blamed poor conditions and overcrowding for a fire that killed at least 40 migrants from Central and South America at a migrant detention centre in Ciudad Juárez, a Mexican city on… [+5292 chars]"
    // },
    // {
    // "source": {
    // "id": "fox-news",
    // "name": "Fox News"
    // },
    // "author": "Lawrence Richard",
    // "title": "China threatens to take 'resolute countermeasures' over meeting between Taiwan's Tsai, House Speaker McCarthy - Fox News",
    // "description": "The Chinese government has threatened to take action should the U.S. and Taiwan go through with allowing House Speaker Kevin McCarthy and Taiwanese President Tsai Ing-wen to meet.",
    // "url": "https://www.foxnews.com/world/china-threatens-take-resolute-countermeasures-meeting-between-taiwans-tsai-house-speaker-mccarthy",
    // "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/03/GettyImages-1249835876.jpg",
    // "publishedAt": "2023-03-29T08:13:00Z",
    // "content": "China has threatened to retaliate against the United States and Taiwan over a planned meeting between Taiwanese President Tsai Ing-wen and House Speaker Kevin McCarthy.\r\nBeijing has repeatedly allege… [+2803 chars]"
    // },
    // {
    // "source": {
    // "id": "business-insider",
    // "name": "Business Insider"
    // },
    // "author": "Joshua Zitser",
    // "title": "Zelenskyy says Ukraine received faulty air defense system from ally - Business Insider",
    // "description": "Ukrainian President Volodymyr Zelenskyy told the AP that a European ally provided an air defense system that had to be repeatedly changed.",
    // "url": "https://www.businessinsider.com/zelenskyy-says-ukraine-received-faulty-air-defense-system-europe-ally-2023-3",
    // "urlToImage": "https://i.insider.com/64240a45ed593e00183f06b4?width=1200&format=jpeg",
    // "publishedAt": "2023-03-29T08:05:00Z",
    // "content": "Ukrainian President Volodymyr Zelenskyy said a European ally provided Ukraine with a faulty air defense system, although he withheld which country was responsible.\r\nSince Russia's invasion in Februar… [+1933 chars]"
    // },
    // {
    // "source": {
    // "id": "cnn",
    // "name": "CNN"
    // },
    // "author": "Carma Hassan, Helen Regan",
    // "title": "WHO experts revise Covid-19 vaccine advice, say healthy kids and teens low risk - CNN",
    // "description": "The World Health Organization's vaccine experts have revised their global Covid-19 vaccination recommendations, and healthy kids and teenagers considered low priority may not need to get a shot.",
    // "url": "https://www.cnn.com/2023/03/29/health/who-updates-covid-vaccine-recommendations-intl-hnk/index.html",
    // "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230323050028-01-covid-shot-stock.jpg?c=16x9&q=w_800,c_fill",
    // "publishedAt": "2023-03-29T06:22:00Z",
    // "content": "The World Health Organizations vaccine experts have revised their global Covid-19 vaccination recommendations, and healthy kids and teenagers considered low priority may not need to get a shot. \r\nThe… [+3009 chars]"
    // },
    // {
    // "source": {
    // "id": null,
    // "name": "New York Post"
    // },
    // "author": "Ted Holmlund",
    // "title": "Lamar Jackson pushes back on critics regarding his injury history - New York Post ",
    // "description": "Lamar Jackson took to Twitter on Tuesday night to push back on talk from critics questioning his toughness or saying he sat out games due to money.",
    // "url": "https://nypost.com/2023/03/29/lamar-jackson-pushes-back-on-critics-regarding-injury-history/",
    // "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/03/Lamar-Jackson-3.jpg?quality=75&strip=all&w=1024",
    // "publishedAt": "2023-03-29T05:46:00Z",
    // "content": "Lamar Jackson, whose future remains one of the top offseason stories in the NFL, took to Twitter on Tuesday night to push back on talk from critics questioning his toughness or saying he sat out game… [+1764 chars]"
    // },
    // {
    // "source": {
    // "id": null,
    // "name": "Hollywood Reporter"
    // },
    // "author": "Carol McColgin",
    // "title": "Hollywood’s 25 Most Powerful Stylists: Why Sydney Sweeney, Sadie Sink, Anne Hathaway, Angela Bassett and Jodie Turner-Smith Love Their Image Makers - Hollywood Reporter",
    // "description": "Andrew Garfield and Janelle Monáe also toast their tastemakers in THR’s annual list, which celebrates megawatt glamour (J. Lo’s 3 wedding gowns), sustainability (thank you, Cate Blanchett) and drama on and off the red carpet (farewell, Law Roach, for now).",
    // "url": "https://www.hollywoodreporter.com/lifestyle/style/best-celebrity-stylists-2023-1235360354/",
    // "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2023/03/230219_Hollywood-Reporter_05_0578_scanFINAL-Splash-2023.jpg?w=1024",
    // "publishedAt": "2023-03-29T05:00:56Z",
    // "content": "Rewear, repeat, three-peat … The verbiage summing up what’s new on the red carpet in the past year happens to center on what’s old, or at least previously worn. Sustainability and vintage were at the… [+37138 chars]"
    // },
    // {
    // "source": {
    // "id": null,
    // "name": "CNBC"
    // },
    // "author": "Ruxandra Iordache, Joanna Tan, Jihye Lee, Elliot Smith",
    // "title": "Sergio Ermotti returns as UBS CEO to oversee Credit Suisse takeover - CNBC",
    // "description": "Sergio Ermotti will replace current CEO Ralph Hamers, who is set to remain at UBS to advise the bank during the transition period, UBS said.",
    // "url": "https://www.cnbc.com/2023/03/29/ubs-names-sergio-ermotti-as-its-new-ceo-following-acquisition-of-credit-suisse.html",
    // "urlToImage": "https://image.cnbcfm.com/api/v1/image/107216782-1680066441144-gettyimages-138490489-68306953.jpeg?v=1680067104&w=1920&h=1080",
    // "publishedAt": "2023-03-29T04:59:14Z",
    // "content": "UBS appointed Sergio P. Ermotti as its group Chief Executive Officer following its agreement to acquire Credit Suisse.\r\nUBS named Sergio Ermotti as its new Group CEO on Wednesday, following the recen… [+5356 chars]"
    // },
    // {
    // "source": {
    // "id": null,
    // "name": "CBS Sports"
    // },
    // "author": "",
    // "title": "Bronny James shows shooting touch in McDonald's All-American Game, Kentucky signee DJ Wagner earns co-MVP - CBS Sports",
    // "description": "The McDonald's All-American game came down to the wire on Tuesday night as a group of future stars shined",
    // "url": "https://www.cbssports.com/college-basketball/news/bronny-james-shows-shooting-touch-in-mcdonalds-all-american-game-kentucky-signee-dj-wagner-earns-co-mvp/",
    // "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/03/29/7fc3ba87-c022-4438-a2dd-57cad16a4128/thumbnail/1200x675/3924d8245c38a7a567ba9cdb14f06194/usatsi-20337925-1.jpg",
    // "publishedAt": "2023-03-29T04:00:00Z",
    // "content": "Bronny James put his outside shooting prowess on display in the McDonald's All-American Game on Tuesday night as his West team fell to the East 109-106 in a battle of high school basketball's top sen… [+2556 chars]"
    // },
    // {
    // "source": {
    // "id": null,
    // "name": "YouTube"
    // },
    // "author": null,
    // "title": "Starbucks union member: Workers remain scared but want to fight for their rights - CNBC Television",
    // "description": "Hosted by Brian Sullivan, “Last Call” is a fast-paced, entertaining business show that explores the intersection of money, culture and policy. Tune in Monday...",
    // "url": "https://www.youtube.com/watch?v=vUeHqHG9DrE",
    // "urlToImage": "https://i.ytimg.com/vi/vUeHqHG9DrE/maxresdefault.jpg",
    // "publishedAt": "2023-03-29T01:18:13Z",
    // "content": null
    // }
    // ]
    
    
  constructor(props){
    super(props);
    this.state={
      articles:[],
      loading:true,
      page:1,
      totalResults:0
      // pageSize:5
    }
  }
  async updateNews(){
   this.props.setProgress(0)
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=af2e2287597b4c09b81926029159fbac&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true}) 
   this.props.setProgress(5)

    let data=await fetch(url)
   this.props.setProgress(20)

    let parsedData=await data.json()
   this.props.setProgress(50)


    this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,
       loading:false })
   this.props.setProgress(100)

  //  })
  }
  async componentDidMount(){
   this.props.setProgress(0)

  //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=af2e2287597b4c09b81926029159fbac&page=1&pageSize=${this.props.pageSize}`;
  //   let data=await fetch(url)
  //   let parsedData=await data.json()
  //   this.setState({loading:true})

  //   this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,
  //  loading:false })
  this.updateNews()
  this.props.setProgress(100)

  }
  //  handlePrev = async () => {
    // console.log('previous')
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=af2e2287597b4c09b81926029159fbac&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    // let data=await fetch(url)
    // let parsedData=await data.json()
    // this.setState({loading:true})
    // this.setState({
    //      page:this.state.page-1,
    //      articles:parsedData.articles,
    //      loading:false
    // })
    // this.setState({page:this.state.page-1})
    // this.updateNews()

  // }
  //  handleNext = async () => {
  //   console.log('next')
  //   // if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){

    // // }
    // // else{

    //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=af2e2287597b4c09b81926029159fbac&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    //   let data=await fetch(url)
    //   let parsedData=await data.json()
    //   this.setState({loading:true})
    //   this.setState({
    //     page:this.state.page+1,
    //     articles:parsedData.articles,
    //     loading:false
    //   })
    // }
  // this.setState({page:this.state.page+1})
  // this.updateNews()

  // }
  fetchMoreData = async () => {
   this.setState({page:this.state.page+1})
   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=af2e2287597b4c09b81926029159fbac&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data=await fetch(url)
    let parsedData=await data.json()
    // this.setState({loading:true})

    this.setState({articles:this.state.articles.concat(parsedData.articles),
      totalResults:parsedData.totalResults,
  //  loading:false })
   })
  };
  

  render(){
    return(
    <>
 {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
     {/* {this.state.loading && <Spinner/>} */}
     {/* <hr /> */}

     {/* {!this.state.loading && this.state.articles.map((elem)=>{ */}
       <div className="container">
      <div className="row" >
     {this.state.articles.map((elem)=>{
        return(
      <div className="col-md-4" key={elem.url}>

          {/* <Newsitem title={elem.title.slice(0,45)} description={elem.description.slice(0,87)} imageUrl={elem.urlToImage} newsUrl={elem.url}/> */}
          <Newsitem title={elem.title?elem.title:''} description={elem.description?elem.description:""} imageUrl={elem.urlToImage} newsUrl={elem.url} author={elem.author} date={elem.publishedAt} source={elem.source.name}/>
      </div>)
     })}
     
      {/* <div className="d-flex justify-content-between">
        <button disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrev}>&#8592; Previous</button>
        <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNext}>Next &#8594;</button>
      </div> */}
      </div>
       </div>
      </InfiniteScroll>
          
        
    </>
    )
    
  }
}

export default News



/**
|--------------------------------------------------
| sir haris wala start
|--------------------------------------------------
*/

// export class News extends Component {
//     static defaultProps = {
//         country: 'pak',
//         pageSize: 8,
//         category: 'general',
//     }

//     static propTypes = {
//         country: PropTypes.string,
//         pageSize: PropTypes.number,
//         category: PropTypes.string,
//     }
//     capitalizeFirstLetter = (string) => {
//         return string.charAt(0).toUpperCase() + string.slice(1);
//     }
//     constructor(props) {
//         super(props);
//         this.state = {
//             articles: [],
//             loading: true,
//             page: 1,
//             totalResults: 0
//         }
//         document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
//     }

//     async updateNews() {
//         const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d093053d72bc40248998159804e0e67d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//         this.setState({ loading: true });
//         let data = await fetch(url);
//         let parsedData = await data.json()
//         this.setState({
//             articles: parsedData.articles,
//             totalResults: parsedData.totalResults,
//             loading: false, 
//         })

//     }
//     async componentDidMount() {
//         this.updateNews();
//     }

//     handlePrevClick = async () => {
//         this.setState({ page: this.state.page - 1 });
//         this.updateNews();
//     }

//     handleNextClick = async () => {
//         this.setState({ page: this.state.page + 1 });
//         this.updateNews()
//     }

//     fetchMoreData = async () => {  
//         this.setState({page: this.state.page + 1})
//         const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d093053d72bc40248998159804e0e67d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//         let data = await fetch(url);
//         let parsedData = await data.json()
//         this.setState({
//             articles: this.state.articles.concat(parsedData.articles),
//             totalResults: parsedData.totalResults
//         })
//       };

//     render() {
//         return (
//             <>
//                 <h1 className="text-center" style={{ margin: '35px 0px' }}>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
//                 {this.state.loading && <Spinner />}
//                 <InfiniteScroll
//                     dataLength={this.state.articles.length}
//                     next={this.fetchMoreData}
//                     hasMore={this.state.articles.length !== this.state.totalResults}
//                     loader={<Spinner/>}
//                 > 
//                     <div className="container">
                         
//                     <div className="row">
//                         {this.state.articles.map((element) => {
//                             return <div className="col-md-4" key={element.url}>
//                                 <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
//                             </div>
//                         })}
//                     </div>
//                     </div> 
//                 </InfiniteScroll>

//             </>
//         )
//     }
// }
// export default News

