import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import '../styles/Orgchart.css';

export const Orgchart2 = () => {
	return (
		<div style={{ backgroundColor: '#2a2a2e', padding: '5vh' }}>
			<Grid container className="grid-layer" spacing={3} style={{}}>
				<Grid item xs={4}></Grid>
				<Grid item xs={4}>
					<Card>
						<CardHeader
							title="The Walt Disney Company"
							subheader="This is a subheader lmao"
						/>
						<CardMedia
							image="https://i.pinimg.com/originals/d7/18/3f/d7183f72078df410f83279c1b7bbc191.jpg"
							title="Logo"
							style={{ height: '30vh' }}
						/>
						<CardContent>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
							doloribus iste ratione possimus dolores architecto quaerat
							dolorem. Quibusdam a quam delectus repellat itaque et, excepturi
							ipsa consequatur rem omnis sunt.
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={4}></Grid>
			</Grid>
			<svg className="svgContainer">
				<line className="line" x1="50%" y1="0%" x2="50%" y2="100%" />
			</svg>
			<Grid container className="grid-layer" spacing={3}>
				<Grid item xs={4}></Grid>

				<Grid item xs={4}>
					<Card>
						<CardHeader title="ABC News" subheader="This is a subheader lmao" />
						<CardMedia
							image="https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg"
							title="Logo"
							style={{ height: '20vh' }}
						/>
						<CardContent>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
							doloribus iste ratione possimus dolores architecto quaerat
							dolorem. Quibusdam a quam delectus repellat itaque et, excepturi
							ipsa consequatur rem omnis sunt.
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={4}></Grid>
			</Grid>
			<svg className="svgContainer">
				<line className="line" x1="50%" y1="0%" x2="50%" y2="100%" />
			</svg>
			<Grid container className="grid-layer" spacing={3}>
				<Grid item xs={4}></Grid>

				<Grid item xs={4}>
					<Card>
						<CardHeader
							title="ABC 7 Bay Area"
							subheader="This is a subheader lmao"
						/>
						<CardMedia
							image="https://cdn.abcotvs.net/abcotv/assets/news/kgo/images/logos/default_800x450.jpg"
							title="Logo"
							style={{ height: '20vh' }}
						/>
						<CardContent>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
							doloribus iste ratione possimus dolores architecto quaerat
							dolorem. Quibusdam a quam delectus repellat itaque et, excepturi
							ipsa consequatur rem omnis sunt.
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={4}></Grid>
			</Grid>
		</div>
	);
};

export default Orgchart2;
