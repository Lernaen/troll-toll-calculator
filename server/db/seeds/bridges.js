export async function seed(knex) {
  // Deletes ALL existing entries

  await knex('bridges').del()
  await knex('tolls').del()
  await knex('favourites').del()

  await knex('bridges').insert([
    {
      id: 1,
      name: 'Auckland Harbour Bridge',
      location: 'Auckland Harbour',
      type: 'Motorway bridge',
      year_built: 1959,
      length_meters: 1020,
      lanes: 8,
      active_by_users: 'auth0|4321',
      image_path: 'auckland-harbour-bridge.jpg',
      latitude: -36.830531458000365,
      longitude: 174.7457246930943,
    },
    {
      id: 2,
      name: 'Grafton Bridge',
      location: 'Grafton Gully',
      type: 'Road bridge',
      year_built: 1910,
      length_meters: 100,
      lanes: 4,
      active_by_users: 'auth0|4321',
      image_path: 'grafton-bridge.jpg',
      latitude: -36.85867,
      longitude: 174.7641,
    },
    {
      id: 3,
      name: 'Jacobs Ladder Bridge',
      location: 'Somewhere',
      type: 'Pedestrian bridge',
      year_built: 2000,
      length_meters: 50,
      lanes: null,
      active_by_users: null,
      image_path: 'jacobs-ladder-bridge.jpg',
      latitude: -36.843955490271405, 
      longitude: 174.75084271137268,
    },
    {
      id: 4,
      name: 'Māngere Bridge',
      location: 'Māngere',
      type: 'Road bridge',
      year_built: 1965,
      length_meters: 300,
      active_by_users: null,
      image_path: 'mangere-bridge.jpg',
      latitude: -36.933019449357545, 
      longitude: 174.78804093195217,
    },
    {
      id: 5,
      name: 'Newmarket Viaduct',
      location: 'Newmarket',
      type: 'Viaduct',
      year_built: 1980,
      length_meters: 500,
      active_by_users: null,
      image_path: 'newmarket-viaduct.jpg',
      latitude: -36.873718688795336,
      longitude: 174.77740096571915,
    },
    {
      id: 6,
      name: 'Onehunga Harbour Road Bridge',
      location: 'Onehunga Harbour Road',
      type: 'Road bridge',
      year_built: 1995,
      length_meters: 150,
      lanes: 2,
      active_by_users: null,
      image_path: 'onehunga-roadbridge.jpg',
      latitude: -36.93376045521282,
      longitude: 174.7868541230449,
    },
    {
      id: 7,
      name: 'Onepoto Bridge',
      location: 'Someplace',
      type: 'Bridge type',
      year_built: 2010,
      length_meters: 80,
      active_by_users: null,
      image_path: 'onepoto-bridge.jpg',
      latitude: -36.811999683514166, 
      longitude: 174.750002320938,
    },
    {
      id: 8,
      name: 'Panmure Bridge',
      location: 'Panmure',
      type: 'Bridge type',
      year_built: 2005,
      length_meters: 120,
      active_by_users: null,
      image_path: 'panmure-bridge.jpg',
      latitude: -36.90830872932838,
      longitude: 174.85827613370225,
    },
    {
      id: 9,
      name: 'Tāmaki Bridge',
      location: 'Tāmaki',
      type: 'Bridge type',
      year_built: 2015,
      length_meters: 90,
      active_by_users: null,
      image_path: 'tamaki-bridge.jpg',
      latitude: null,
      longitude: null,
    },
    {
      id: 10,
      name: 'Upper Harbour Bridge',
      location: 'Upper Harbour',
      type: 'Bridge type',
      year_built: 2008,
      length_meters: 200,
      active_by_users: null,
      image_path: 'upper-harbour-bridge.jpg',
      latitude: -36.784881486846466, 
      longitude: 174.66800723270467,
    },
    {
      id: 11,
      name: 'Victoria Park Viaduct',
      location: 'Victoria Park',
      type: 'Viaduct',
      year_built: 1988,
      length_meters: 350,
      active_by_users: null,
      image_path: 'victoria-park-viaduct.jpg',
      latitude: -36.84646631439054, 
      longitude: 174.75311815073286,
    },
    {
      id: 12,
      name: 'Westgate Pedestrian and Cycle Bridge',
      location: 'Westgate',
      type: 'Pedestrian and Cycle Bridge',
      year_built: 2018,
      length_meters: 120,
      active_by_users: null,
      image_path: 'westgate-bridge.jpg',
      latitude: -36.822386056299536, 
      longitude: 174.61603851451517,
    },
    {
      id: 13,
      name: 'Wynyard Crossing',
      location: 'Wynyard Quarter',
      type: 'Bascule Bridge',
      year_built: 2012,
      length_meters: 60,
      active_by_users: null,
      image_path: 'wynward-crossing.jpg',
      latitude: -36.841270689012156, 
      longitude: 174.75989913697,
    },
  ])

  await knex('favourites').insert([
    { id: 1, bridges_id: 1, users_token: 'auth0|1234' },
    { id: 2, bridges_id: 2, users_token: 'auth0|4321' },
  ])

  const date = new Date().getTime()

  await knex('tolls').insert([
    {
      users_token: '0auth|1234',
      candies: 5,
      time_stamp: `${date}`,
      bridges_id: 1,
    },
    {
      users_token: '0auth|1234',
      candies: 5,
      time_stamp: `${date}`,
      bridges_id: 1,
    },
    {
      users_token: '0auth|1234',
      candies: 5,
      time_stamp: `${date}`,
      bridges_id: 1,
    },
    {
      users_token: '0auth|1234',
      candies: 5,
      time_stamp: `${date}`,
      bridges_id: 1,
    },
    {
      users_token: '0auth|1234',
      candies: 5,
      time_stamp: `${date}`,
      bridges_id: 8,
    },
    {
      users_token: '0auth|4321',
      candies: 5,
      time_stamp: `${date}`,
      bridges_id: 3,
    },
    {
      users_token: '0auth|4321',
      candies: 5,
      time_stamp: `${date}`,
      bridges_id: 12,
    },
    {
      users_token: '0auth|4321',
      candies: 5,
      time_stamp: `${date}`,
      bridges_id: 3,
    },
    {
      users_token: '0auth|4321',
      candies: 5,
      time_stamp: `${date}`,
      bridges_id: 3,
    },
    {
      users_token: '0auth|4321',
      candies: 5,
      time_stamp: `${date}`,
      bridges_id: 3,
    },
    {
      users_token: '0auth|4321',
      candies: 5,
      time_stamp: `${date}`,
      bridges_id: 3,
    },
    {
      users_token: '0auth|4321',
      candies: 5,
      time_stamp: `${date}`,
      bridges_id: 3,
    },
    {
      users_token: '0auth|4321',
      candies: 5,
      time_stamp: `${date}`,
      bridges_id: 3,
    },
    {
      users_token: '0auth|1234',
      candies: 5,
      time_stamp: `${date}`,
      bridges_id: 1,
    },
    {
      users_token: '0auth|4321',
      candies: 5,
      time_stamp: `${date}`,
      bridges_id: 3,
    },
  ])
}
