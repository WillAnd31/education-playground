import * as React from "react";
import { RaisedButton, AppBar, IconButton } from 'material-ui';

import { ChartComponent } from './../chart/chart.component';

// Images
const TitleImg = require('./../../../../media/education.jpg');
const BoringImg = require('./../../../../media/boring-lecture.jpg');
const TechImg = require('./../../../../media/laptops-lecture.jpg');
const SocratesImg = require('./../../../../media/socrates.jpg');
const InvolvementImg = require('./../../../../media/student-involvement.jpg');
const LearningStylesImg = require('./../../../../media/learning-styles.png');
const GradsImg = require('./../../../../media/grads.png');

const titleStyle = {
	cursor: 'pointer'
};

export class Main extends React.Component<{}, {}> {
	render() {
		return <main className='willand-main' onLoad={this.init}>

			<div className='title-container'>
				<img className='title-img' src={TitleImg}/>
				<h1 className='title'>Education Methods</h1>
			</div>

			<article className="content">
				<p>
					Education can be one of the most important parts of an individual’s life. Studies have shown that the more education you receive the less likely you are to become unemployed[<span className="annotation" onClick={this.bottom}>6</span>]. One study found that the median income of an individual with a Bachelor’s degree is two times higher than the median income of an individual who didn’t obtain a high school diploma[<span className="annotation" onClick={this.bottom}>7</span>].
				</p>

				<div className='charts'>
					<div>
						<canvas id='unemploymentChart' height='400' width='400'></canvas>
					</div>

					<div>
						<canvas id='salaryChart' height='400' width='400'></canvas>
					</div>
				</div>

				<p>
					There are many forms of education, not all of them are formal schooling and with the relatively recent introduction of modern technology education has changed dramatically. Many classrooms now have laptops or tablets available for students to be further engaged with the lesson being taught. [<span className="annotation" onClick={this.bottom}>8</span>]
				</p>

				<div className="lecture-images">
					<img className="boring" src={BoringImg}/>
					<i className="fa fa-arrow-right"></i>
					<img className="tech" src={TechImg}/>
				</div>

				<div className="socrates-container">
					<img src={SocratesImg}/>
					<p className="socrates-text">
						One of the most common education methods is for a teacher to stand in front of the classroom and lecture. This method has been around since before the first University was founded. This method was beneficial in a time where scholarly text wasn’t well distributed, it was more efficient for a teacher to stand in front of a large group and read the scholarly text than to pass the text to single individuals. The problem with the teaching method is that it doesn’t involve the students.
					</p>
				</div>

				<div className="involvement-container">
					<p className="involvement-text">
						Student involvement is one of the most important aspects of an effective educational method[<span className="annotation" onClick={this.bottom}>4</span>]. The purpose of education is to obtain knowledge, the lecture approach to teaching is effective when it comes to obtaining facts, but to truly obtain knowledge one must understand the subject being taught and not just the facts surrounding the subject. Socrates was famous for teaching his students by asking them questions, this engaged his students and his students obtained knowledge by trying to answer the questions[<span className="annotation" onClick={this.bottom}>2</span>]. Lecturing gives students the answers without the students finding the answers for themselves.
					</p>
					<img src={InvolvementImg}/>
				</div>

				<p>
					The Socratic method of teaching can be very effective, but it isn’t the only way a teacher can engage a student. Modern technology has given teachers a new medium to help involve students in a lesson. Students can now participate in a lesson with the aid of apps on a tablet, or they can research the lesson being taught with the help of Google. Teachers are no longer bound only by the lesson material found in a text book.
				</p>

				<div className="learning-styles-container">
					<img className="learning-styles" src={LearningStylesImg}/>
				</div>

				<p>
					Some education methods can be effective for one student and ineffective for another. For some students, hands on education is the most effective method of education, another student might learn best from reading out of a textbook, no student is alike and classrooms need to be able to adapt to a student’s educational needs[<span className="annotation" onClick={this.bottom}>5</span>]. Technology can help a student customize the type of education they receive.
				</p>
				<p>
					Because education is so important, the type of education a student receives is also very important. When teachers involve students in lessons, students tend to have a more enjoyable learning experience. Students are less likely to drop out of school, and are more likely to seek higher education[<span className="annotation" onClick={this.bottom}>3</span>]. Because of this, effective educational methods aren’t just important to individual students, these methods are important to society itself.
				</p>

				<div className="learning-styles-container">
					<img className="learning-styles" src={GradsImg}/>
				</div>

			</article>

			<article className="resources">
				<h3 className='center-align'>Resources</h3>
				<ol>
					<li>
						Franzoni, A. L., & Assar, S. (2009). <a href="http://www.ifets.info/journals/12_4/3.pdf">Student Learning Styles Adaptation Method Based on Teaching Strategies and Electronic Media.</a> Educational Technology & Society, 12 (4), 15–29.
					</li>
					<li>
						R, P., & L, E. (1997, April). <a href="http://www.criticalthinking.org/pages/socratic-teaching/606">Socratic Teaching.</a> Retrieved October 18, 2016.
					</li>
					<li>
						Rumberger, Russell W. (2001). <a href="https://escholarship.org/uc/item/58p2c3wp">Why Students Drop Out of School and What Can Be Done.</a> UCLA: The Civil Rights Project / Proyecto Derechos Civiles.
					</li>
					<li>
						Shernoff, D. J., Csikszentmihalyi, M., Shneider, B., & Shernoff, E. S. (2003). <a href="http://www.cedu.niu.edu/~shernoff/pdf/shernoff.spq.pdf">Student Engagement in High School Classrooms from the Perspective of Flow Theory.</a> School Psychology Quarterly, 18(2), 158-176. Retrieved October 18, 2016.
					</li>
					<li>
						Sun, S., Joy, M., & Griffiths, N. (2007, July). <a href="http://www.dcs.warwick.ac.uk/~nathan/resources/Publications/edmedia-2005.pdf">The Use of Learning Objects and Learning Styles in a Multi-Agent Education System.</a> Journal of Interactive Learning Research, 18(3), 381-398. Retrieved October 18, 2016.
					</li>
					<li>
						U.S. Bureau of Labor Statistics. (2016). <a href="http://www.bls.gov/emp/ep_chart_001.htm">Earnings and unemployment rates by educational attainment.</a> Bls.gov. Retrieved 18 October 2016.
					</li>
					<li>
						U.S. Bureau of Labor Statistics. (2015). <a href="http://www.bls.gov/opub/ted/2015/median-weekly-earnings-by-education-gender-race-and-ethnicity-in-2014.htm">Median weekly earnings by educational attainment in 2014.</a> Bls.gov. Retrieved 18 October 2016.
					</li>
					<li>
						U.S. Department of Education. (2000). <a href="https://www2.ed.gov/pubs/EdReformStudies/EdTech/overview.html">Overview of Technology and Education Reform.</a> Retrieved 18 October 2016.
					</li>
				</ol>
			</article>

			<footer className="willand-footer">
				<AppBar
					style={{}}
					title="Will Anderson"
					onTitleTouchTap={this.goToWillAnd}
					titleStyle={titleStyle}
					showMenuIconButton={false}
					iconElementRight={<IconButton iconClassName="fa fa-github"/>}
					onRightIconButtonTouchTap={this.goToGithub}
				/>
			</footer>
		</main>
	}

	init () {
		let unemploymentChartElm = document.getElementById('unemploymentChart');
		const unemploymentData = [1.7, 1.5, 2.4, 2.8, 3.8, 5.0, 5.4, 8.0];
		const unemploymentLabels = [
			'Doctoral',
			'Professional',
			`Master's`,
			`Bachelor's`,
			`Associate's`,
			`Some college, no`,
			`High school diploma`,
			`Less than a high school diploma`
		];
		const unemploymentBackgrounds = [
			'rgba(102, 255, 102, 0.2)',
			'rgba(0, 255, 255, 0.2)',
			'rgba(102, 102, 255, 0.2)',
			'rgba(255, 102, 255, 0.2)',
			'rgba(255, 102, 102, 0.2)',
			'rgba(255, 153, 0, 0.2)',
			'rgba(153, 255, 51, 0.2)',
			'rgba(0, 0, 255, 0.2)'
		];
		const unemploymentBorders = [
			'rgba(102, 255, 102, 1)',
			'rgba(0, 255, 255, 1)',
			'rgba(102, 102, 255, 1)',
			'rgba(255, 102, 255, 1)',
			'rgba(255, 102, 102, 1)',
			'rgba(255, 153, 0, 1)',
			'rgba(153, 255, 51, 1)',
			'rgba(0, 0, 255, 1)'
		];
		const unemploymentChart = {
			type: 'bar',
			data: {
				labels: unemploymentLabels,
				datasets: [{
					data: unemploymentData,
					backgroundColor: unemploymentBackgrounds,
					borderColor: unemploymentBorders,
					borderWidth: 1
				}]
			},
			options: {
				legend: {
					display: false
				},
				title: {
						display: true,
						text: 'Unemployment Rates [6]'
				}
			}
		};

		let salaryChartElm = document.getElementById('salaryChart');
		const salaryData = [488, 668, 761, 1101, 1193, 1386];
		const salaryLabels = [
			`Less than a high school diploma`,
			`High school diploma`,
			`Some college`,
			`Bachelor's`,
			`Bachelor's and higher`,
			`Advanced`
		];
		const salaryBackgrounds = [
			'rgba(102, 255, 102, 0.2)',
			'rgba(0, 255, 255, 0.2)',
			'rgba(102, 102, 255, 0.2)',
			'rgba(255, 102, 255, 0.2)',
			'rgba(255, 102, 102, 0.2)',
			'rgba(255, 153, 0, 0.2)'
		];
		const salaryBorders = [
			'rgba(102, 255, 102, 1)',
			'rgba(0, 255, 255, 1)',
			'rgba(102, 102, 255, 1)',
			'rgba(255, 102, 255, 1)',
			'rgba(255, 102, 102, 1)',
			'rgba(255, 153, 0, 1)'
		];
		const salaryChart = {
			type: 'bar',
			data: {
				labels: salaryLabels,
				datasets: [{
					data: salaryData,
					backgroundColor: salaryBackgrounds,
					borderColor: salaryBorders,
					borderWidth: 1
				}]
			},
			options: {
				legend: {
					display: false
				},
				title: {
						display: true,
						text: 'Weekly Income [7]'
				}
			}
		};

		setTimeout(() => {
			new Chart(unemploymentChartElm, unemploymentChart);
			new Chart(salaryChartElm, salaryChart);
		}, 1000);
	}

	makeChart () {
	}

	bottom () {
		window.scrollTo(0,document.body.scrollHeight);
	}

	goToWillAnd () {
		window.open('https://willand.co', '_blank');
	}

	goToGithub () {
		window.open('https://github.com/willand31', '_blank');
	}

}