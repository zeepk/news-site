import React from "react"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import "../styles/Orgchart.css"

export const Orgchart = () => {
  return (
    <div style={{ backgroundColor: "#2a2a2e", padding: "5vh" }}>
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
              style={{ height: "30vh" }}
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
        <line className="line" x1="50%" y1="0%" x2="50%" y2="50%" />
        <line className="line" x1="15%" y1="50%" x2="85%" y2="50%" />
        <line className="line" x1="15%" y1="50%" x2="15%" y2="100%" />
        <line className="line" x1="50%" y1="50%" x2="50%" y2="100%" />
        <line className="line" x1="85%" y1="50%" x2="85%" y2="100%" />

        {/* <BgLine /> */}
      </svg>
      <Grid container className="grid-layer" spacing={3}>
        <Grid item xs={4}>
          <Card>
            <CardHeader title="ABC News" subheader="This is a subheader lmao" />
            <CardMedia
              image="https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg"
              title="Logo"
              style={{ height: "20vh" }}
            />
            <CardContent>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              doloribus iste ratione possimus dolores architecto quaerat
              dolorem. Quibusdam a quam delectus repellat itaque et, excepturi
              ipsa consequatur rem omnis sunt.
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardHeader title="ESPN" subheader="This is a subheader lmao" />
            <CardMedia
              image="https://www.deccanherald.com/sites/dh/files/article_images/2020/04/15/ESPN-1586927968.jpg"
              title="Logo"
              style={{ height: "20vh" }}
            />
            <CardContent>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              doloribus iste ratione possimus dolores architecto quaerat
              dolorem. Quibusdam a quam delectus repellat itaque et, excepturi
              ipsa consequatur rem omnis sunt.
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardHeader title="A&E" subheader="This is a subheader lmao" />
            <CardMedia
              image="https://cropper.watch.aetnd.com/cdn.watch.aetnd.com/sites/4/2017/03/we-are-ae-1920x1080.jpg?w=900"
              title="Logo"
              style={{ height: "20vh" }}
            />
            <CardContent>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              doloribus iste ratione possimus dolores architecto quaerat
              dolorem. Quibusdam a quam delectus repellat itaque et, excepturi
              ipsa consequatur rem omnis sunt.
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default Orgchart
