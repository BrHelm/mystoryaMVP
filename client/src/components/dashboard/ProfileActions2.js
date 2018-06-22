import React from "react";
import { Link } from "react-router-dom";
import {Button, Glyphicon} from 'react-bootstrap';

const ProfileActions2 = () => {
  return <div className='row' style={{marginLeft: '1%', marginTop: '2%'}}>
    <div className='col-md-6'>
      <Link to="/edit-profile" >
        <Button className='profEditBtn'>
          Edit Profile
        </Button>
      </Link>
      </div>
    <div className='col-md-6'>
      <Link to="/create">
        <Button type="submit" className='redCreateBtn'>
          {" "}
          Create New Story <Glyphicon glyph="glyphicon glyphicon-plus" />
        </Button>
      </Link>
      </div>
    </div>;
};

export default ProfileActions2;
