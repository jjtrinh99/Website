import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from "react";

export default function Home() {
  return (
    <div className={styles.block}
    >
      <Head>
        <title>Trinh&#39;s Site</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.title}>
           <div className="overallh">Jonathan Trinh</div>
        </div>

  
           <br /><p className={styles.code}>Master&#39;s student studying Computer Engineering &#64; UCI 
      </p> 
     
       <p className={styles.description}>Nice seein&#39; you out here&#46;<span className={styles.logo}>
            <Image src="/waving-hand.png" width={72} height={40} alt="emoji"/> </span> 
            <br />Computer Engineer based in California&#44; graduating in December 2022&#46;
          Looking into new-grad full-time roles in Software Development Engineering &#40;SDE&#41;&#46;
          
        <br />Hope you can find more about me&#58; I&#39;ve included my Work + Volunteering Experience&#44; projects worked on&#44; and some hobbies&#46;
      </p> 
      
       <br /><h2>Contact Info <span className={styles.logo}>
            <Image src="/phoneit.png" width={72} height={40} alt="emoji"/></span></h2>
       <div>Feel free to reach out to me through any of the platforms directly below&#46; </div> <br />
       <a 
       href="mailto: jontrinh99@gmail.com?" target="_blank" rel="noreferrer"> Email &crarr;
       </a>
       <a href="https://www.linkedin.com/in/jontrinh/" target="_blank" rel="noreferrer"> LinkedIn &crarr;</a>
       <a href="https://github.com/jjtrinh99 " target="_blank" rel="noreferrer"> Github &crarr;</a>
       <a href="https://www.instagram.com/infinitrinh/" target="_blank" rel="noreferrer"> Photography Instagram &crarr;</a>
 
          <div className="id1">
            <h2>Education <span className={styles.logo}>
            <Image src="/bookstuff.png" width={72} height={40}/></span> </h2>
          </div>
          <div className="id2">
              University of California&#44; Irvine <br />
              Master of Science&#59; Computer Engineering <br /><br />
              University of California&#44; Riverside<br />
              Bachelor of Science&#59; Electrical Engineering 
              <div className="id3"></div>
              <div className="id4">
                June 2022 - Dec&#46; 2022 <br />
                CGPA: 3&#46;62 <br /><br />
                Sept&#46; 2017 - June 2021 <br />
                CGPA: 3&#46;32
                <br /> <br />
              </div>
          </div>
      
         
            <h2>Work Experience</h2>

          <div className={styles.container}>

            <div  className={styles.card}>
              <p><title>Project Management Intern</title><br /></p>
              <div className="location">Lumen Technologies<br /> June 2022 - Current</div>
              <br />  
              &#8226;  Study the workflows of various employees around the company including engineers&#44; managers&#44; and contractors&#44; to streamline needed documentation and bottlenecks for convenience&#46;
              <br /><br />&#8226;  Obtain various overviews of the market &amp; projects being worked on to allow for full end-to-end completion of work by needed dates&#46;
              <br /><br />&#8226;  Gain exposure to various softwares such as Jira &amp; Agile&#46;
            </div>          
            
            <div  className={styles.card}>
              <p><title>IAW Lab Leader &#40;Instructor&#41;</title></p>
                <div className="location"><br />Academic Resource Center; <br /> University of California&#44; Riverside <br />May 2020 - June 2021</div><br />
                <br />
                &#8226;  Leveraged the usage of internet domains to teach intermediate algebra to students&#46;
                <br /><br />&#8226;  Conducted lab sessions for multiple classes of 20+ students to help grasp new strategies and concepts&#46;
                <br /><br />&#8226;  Enhanced communication and teaching skills to provide an inclusive learning environment for students&#46;   
            </div>
            
            <div  className={styles.card}>
              <p><title>IAW Reader &#40;Grader&#41;</title></p>
              <div className="location">Academic Resource Center; University of California&#44; Riverside<br />May 2019 - June 2021</div>
              
              &#8226;  Evaluated and recorded performance of students and assist instructors in grading upwards of 600+ exams&#46;
              <br /><br />&#8226;  Maintained records documenting student performance in IAW assessment&#46;
              <br /><br />&#8226;  Followed guidelines set forth by Math dept&#46; &amp; IAW coordinators&#46;
              
            </div>
            
            <div  className={styles.card}>
              <p><title>Research Assistant &#40;Embedded Systems&#41;</title></p>
              <div className="location"> University of California&#44; Riverside; <br />Sept&#46; 2018 - Sept&#46; 2019</div>
              
              <br />&#8226;  Department of CSE &#40;Embedded Systems Lab&#41;&#46; Worked under Dr&#46; Brian Crites &amp; Dr&#46; Philip Brisk&#46;
              <br /><br />&#8226;  Helped research in microfluidic fabrication and integration with electrical systems to aid in automation&#46;
              <br /><br />&#8226;  Fabricated various schematics to test various cycling techniques to perform PCR&#46;
                <br /><br />
                <a href="https://docs.google.com/document/d/1sm5b1ExjbN4RVA4ml9GjgpM_G4EM93-R7pSvf5XUkao/edit" target="_blank" rel="noreferrer"> Report here &crarr; Presentation can be found under Projects&#46;</a>
                
              </div>
              
            </div>

            <h2>Volunter Experience</h2>

          <div className={styles.container}
          >
                <div  className={styles.card}>
                  <p><title>Director</title><br /></p>
                  <div className='location'>Cutie &amp; Citrus Hack <br />May 2020 - June 2021</div>
                
                  &#8226; Led a committee consisting of team leads and subcommittees&#44; inclusive of Sponsorship&#44; Web Development&#44; Operations&#44; &amp; Marketing&#46;
                  <br /><br />&#8226; Streamlined and centralized workflow towards an impactful hackathon through documentation&#44; inclusivity&#44; engagement&#44; and collaboration&#46;
                  <br /><br />&#8226; Organized Citrus Hack&#44; capped at 500 hackers &#40;900 applicants&#41; and our sister hackathon&#44; Cutie Hack&#44; which had 450 hackers&#46;
                </div>

                <div  className={styles.card}>
                <p><title>Sponsorship Lead</title></p>
                <div className="location">Cutie &amp; Citrus Hack <br />May 2019 - June 2020<br /></div>

                  &#8226; Raised upwards of $20&#44;000 to fund Citrus Hack&#44; a 36-hour hackathon&#44; along with Cutie Hack&#44; a 12-hour sister hackathon&#46;
                  <br /><br />&#8226;  Sponsors included GCP&#44; Sketch&#44; &amp; WolframAlpha&#46;
                </div>

                <div  className={styles.card}>
                  <p><title>Secretary</title><br /> </p>
                  <div className='location'>Materials Research Society &#40;MRS&#41;<br />June 2019 - June 2020</div>
                  <br />
                  &#8226;  Maintained records of meeting notes and meeting minutes&#44; along with various paperwork and forms&#46;
                  <br /><br />&#8226; Managed emails&#44; summarize contents meetings and events for members and club participants
                  <br /><br />&#8226; Assisted the President and VP in organizing meetings and various club competitions
                </div>

                <div  className={styles.card}>
                  <p><title>Historian</title></p>
                  <div classname="location">Materials Research Society &#40;MRS&#41;<br />June 2019 - June 2020</div> 
                  
                  <br />
                  &#8226;  Took and uploaded pictures for events and meetings hosted
                  <br /><br />&#8226; Worked with outreach chair &amp; promote events through social media /w pictures and advertisement
                  <br /><br />&#8226; Worked with Webmaster to upload pictures and content for website&#44; events&#44; etc&#46;
                </div>

              

          </div>
        

          <h2>Projects &amp; Work Done</h2>
        <div 
          className={styles.container}
          >

            <a href="https://jonathantrinh.vercel.app/" target="_blank" rel="noreferrer" className={styles.card}>
              <p><title>Personal Site &rarr; </title></p>
              <div className="date">Aug. 2022 - Current</div>
              <br />&#8226; Making my personal site&#46; Working on adding features to make the site look better&#33;
              <br /><br /> &#8226; Built with React&#44; NextJS&#44; and deployed through Vercel&#46;
              <br /><br /> &#8226; Special shoutout to Rajbir Johar&#44; Danial Beg&#44; and Suhas Jagannath&#46;
            </a>
         
          

          <a href="https://docs.google.com/document/d/1Xkci0hA98UrtymjMoVoA1M5H1dRsxnQ0aHoMEtcKdek/edit?usp=sharing" target="_blank" rel="noreferrer" className={styles.card}>
        
              <p><title>Smart Vase IoT &rarr;</title></p>
              <div className="date">Nov&#46; 2021 - Dec&#46; 2021</div>
              
              <br />&#8226; Created an IoT Device&#46; Tracks a vase via smart monitoring to extend the shelf life of flowers&#46;
              <br /><br />&#8226; Monitors water levels of vase&#44; temperature&#44; humidity&#44; and light levels of environment&#46;
              <br /><br />&#8226; Data is stored in Firebase&#46; Warnings are sent to user via Twitter to adjust the vase&#46;  
          
          </a>

          <a href="hhttps://docs.google.com/document/d/1K9Kk7v5S7woE3pdP6iqIU7xLfaW-thwBnI_xWZO0x8k/edit" target="_blank" rel="noreferrer" className={styles.card}>
            <p> <title>Smart Pillow IoT &rarr;</title></p>
            <div className="date"> Sept&#46; 2021 - June 2021</div>
            <br />&#8226; Senior Design in Embedded Systems&#46;
            <br /><br />&#8226; Developed a Smart Pillow geared towards Health IoT &amp; Embedded Systems&#44; specifically through the creation of a Smart Device&#46; 
            <br /><br />&#8226; Includes mechanical actuation&#44; temperature heating &amp; cooling of the pillow&#44; heart rate sensing&#44; and snoring detection&#46;
            <br /><br />&#8226; Helps user make adjustments to their sleep quality &amp; eliminate issues such as sleep apnea &amp; snoring&#46;
          
          </a>
          

          <a href="https://docs.google.com/document/d/1pYLFrX4qAp_fLJdlanWYrLAlOdWDGDz_FReZX_Z_H0Q/edit" target="_blank" rel="noreferrer" className={styles.card}>
            <p><title>Meet The Earth &rarr; </title></p> 
            <div className="date">July 2021 - Sept&#46; 2021</div>
            <br />&#8226; iOS App Development. Implemented on XCode 11 with Swift 5&#46;1
            <br /><br />&#8226; Collaborated with and led a team to develop an iOS App&#46; Github included in the technical report&#46;
            <br /><br />&#8226; Geared towards a user&#39;s health and fitness&#44; specifically in powerlifting&#46;
            <br /><br />&#8226; Utilizes CocoaPads and Firebase to implement Calendar Framework &amp; RealTime Database&#46;
          </a>

          <a href="https://docs.google.com/presentation/d/120sBDQv1Sr-K6onshXQiYKaA25wh7cVHcz5I15wKU9Q/edit#slide=id.p" target="_blank" rel="noreferrer" className={styles.card}>
            <p><title>Low Cost PCR on Microfluidic Device &rarr;</title></p>
            <div className="date">Sept 2018 - Sept&#46; 2019</div>
              <br />&#8226;Designed microfluidic chips to create a prototypical PCR chip and a functional environment to perform PCR
              <br /><br />&#8226;  Created the initial microfluidic device based on a sample PCR assay&#46;
              <br /><br />&#8226;  Participated in initial wet and dry testing to validate device integrity and heating ability&#46;
          </a>

          <a href="https://docs.google.com/document/d/155uo9RAQhZOzTAOQ9Ve1RDytzQzga8hz/edit?usp=sharing&amp;ouid=109920275224725165600&amp;rtpof=true&amp;sd=true" target="_blank" rel="noreferrer" className={styles.card}>
            <p><title>Smart Street Intersection &rarr;</title></p> 
            <div className="date"> May 2019 - June 2019</div>
            <br />&#8226;  Project in Embedded Systems
            <br /><br />&#8226;  Used an Atmega1284&#46; Programmed with C to communicate between various Piezo and IR Sensors&#46;
            <br /><br />&#8226;  Used various sensors and LEDs to display who is in the intersection&#44; helping to simulate a more efficient &amp; energy saving infrastructure&#46;
            <br /><br />&#8226; Simulated &amp; streamlined a traffic intersection complete with pedestrians and vehicles&#46;
          </a>
          
          </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.youtube.com/watch?v=xm3YgoEiEDc&amp;ab_channel=10Hours" target="_blank" rel="noreferrer">
          Shoutouts through this link&#46; &crarr;
        </a>
      </footer>
    </div>
  )
}
