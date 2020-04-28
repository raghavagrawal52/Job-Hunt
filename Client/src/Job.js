import React from "react";
import Paper from '@material-ui/core/Paper'
import  {Typography}  from "@material-ui/core";


export default function Job({job, onClick}){


    return(
        <Paper onClick ={onClick} className = 'job'>
            <div>
               <Typography variant = 'h5' align='left'>{job.title}</Typography>
               <Typography variant = 'h6' align='left'>{job.company}</Typography>
               <Typography align='left'>{job.location}</Typography>
            </div>
            <div>
                <Typography>{job.created_at.split(' ').slice(0,3).join(' ')}</Typography>
            </div>
        </Paper>

    );
}