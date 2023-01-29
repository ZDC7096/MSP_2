import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid } from "@mui/material";

function ProfileCard(props){
    
    console.log(props)
    
    return(
        <Grid item xs={"auto"}>    
            <Card sx={{ maxWidth: 200 }}>
                <CardMedia
                    component="img"
                    alt= {props.item.imgAlt}
                    height="140"
                    image={props.item.img}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.item.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button href={props.item.gitHub} size="small">Github</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default ProfileCard