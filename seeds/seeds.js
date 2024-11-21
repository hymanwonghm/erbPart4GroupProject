/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries

  await knex('subjects').insert([
    {title: 'Chinese'},
    {title: 'AI'}
  ]);

  await knex('courses').insert([
    {subjects_id:1,title:'Chinese-family',credits: 6},
    {subjects_id:2,title:'AI-phython',credits: 6}
  ]);

  await knex('students').insert([
    {name:'kuma',username:'kuma',password:'1234',semester_credit:0,semester_credit_limit:6},
    {name:'hyman',username:'hyman',password:'1234',semester_credit:0,semester_credit_limit:6}
  ]);

  await knex('enrollment').insert([
    {students_id:1,courses_id:1},
    {students_id:2,courses_id:2}
  ]);
};
