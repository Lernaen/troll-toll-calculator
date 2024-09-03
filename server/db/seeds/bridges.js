export async function seed(knex) {
  // Deletes ALL existing entries

  await knex('bridges').del()
  await knex('tolls').del()
  await knex('favourites').del()

  await knex('bridges').insert([
    {
      name: 'Auckland Harbour Bridge',
      location: 'Auckland Harbour',
      type: 'Motorway bridge',
      year_built: 1959,
      length_meters: 1020,
      lanes: 8,
      added_by_user: null,
    },
    {
      name: 'Grafton Bridge',
      location: 'Grafton Gully',
      type: 'Road bridge',
      year_built: 1910,
      length_meters: 100,
      lanes: 4,
      added_by_user: null,
    },
    {
      name: 'Jacobs Ladder Bridge',
      location: 'Somewhere',
      type: 'Pedestrian bridge',
      year_built: 2000,
      length_meters: 50,
      lanes: null,
      added_by_user: null,
    },
    {
      name: 'Māngere Bridge',
      location: 'Māngere',
      type: 'Road bridge',
      year_built: 1965,
      length_meters: 300,
      added_by_user: null,
    },
    {
      name: 'Newmarket Viaduct',
      location: 'Newmarket',
      type: 'Viaduct',
      year_built: 1980,
      length_meters: 500,
      added_by_user: null,
    },
    {
      name: 'Onehunga Harbour Road Bridge',
      location: 'Onehunga Harbour Road',
      type: 'Road bridge',
      year_built: 1995,
      length_meters: 150,
      lanes: 2,
      added_by_user: null,
    },
    {
      name: 'Onepoto Bridge',
      location: 'Someplace',
      type: 'Bridge type',
      year_built: 2010,
      length_meters: 80,
      added_by_user: null,
    },
    {
      name: 'Panmure Bridge',
      location: 'Panmure',
      type: 'Bridge type',
      year_built: 2005,
      length_meters: 120,
      added_by_user: null,
    },
    {
      name: 'Tāmaki Bridge',
      location: 'Tāmaki',
      type: 'Bridge type',
      year_built: 2015,
      length_meters: 90,
      added_by_user: null,
    },
    {
      name: 'Upper Harbour Bridge',
      location: 'Upper Harbour',
      type: 'Bridge type',
      year_built: 2008,
      length_meters: 200,
      added_by_user: null,
    },
    {
      name: 'Victoria Park Viaduct',
      location: 'Victoria Park',
      type: 'Viaduct',
      year_built: 1988,
      length_meters: 350,
      added_by_user: null,
    },
    {
      name: 'Westgate Pedestrian and Cycle Bridge',
      location: 'Westgate',
      type: 'Pedestrian and Cycle Bridge',
      year_built: 2018,
      length_meters: 120,
      added_by_user: null,
    },
    {
      name: 'Wynyard Crossing',
      location: 'Wynyard Quarter',
      type: 'Bascule Bridge',
      year_built: 2012,
      length_meters: 60,
      added_by_user: null,
    },
  ])
}
