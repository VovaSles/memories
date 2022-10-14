import React from 'react';
import Post from './Post';
import useStyles from './postsStyles';
import { useSelector } from 'react-redux';
import { CircularProgress, Grid } from '@material-ui/core';

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();
    console.log(posts)
    return (
        !posts.length ?
            <div
                style={{
                    // do your styles depending on your needs.
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <CircularProgress />
            </div>
            : (
                <Grid className={classes.mainContainer} container alignItems="stretch" spasing={3}>
                    {posts.map((post) => (
                        <Grid key={post._id} item xs={12} sm={6}>
                            <Post post={post} setCurrentId={setCurrentId} />
                        </Grid>
                    ))}
                </Grid>
            )
    )
}

export default Posts