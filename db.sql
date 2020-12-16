CREATE table nearbyplaces.place (
  id numeric not NULL,
  name text not NULL,
  city text not NULL,
  state text not NULL,
  description text not NULL,
  CONSTRAINT place_pk PRIMARY KEY (id)
);

CREATE table nearbyplaces.review (
  id  numeric not NULL,
  placeid numeric not NULL,
  content text not NULL,
  author text not NULL,
  CONSTRAINT review_pk PRIMARY KEY (id)
);
