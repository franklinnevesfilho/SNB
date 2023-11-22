import React from 'react';

function AllListings(listing) {

    return (
        <>
            <h3>{listing.title}</h3>
            <h5>{listing.description}</h5>
            <h5>{listing.datePosted}</h5>
        </>
    );
}

export default AllListings;