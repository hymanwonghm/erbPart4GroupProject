/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {

    return knex.schema
    .createTable('subjects',function(table){
        table.increments('id').primary().notNullable();
        table.string('title').notNullable(); 
    })
    .createTable('courses',function(table){
        table.increments('id').primary().notNullable();
        table.integer('subjects_id').unsigned();
        table.foreign('subjects_id').references('subjects.id').deferrable('deferred');
        table.string('title').notNullable();
        table.integer('credits').notNullable();
    }) 
    .createTable('students',function(table){
        table.increments('id').notNullable();
        table.string('name').notNullable();
        table.string('username').notNullable();
        table.string('password').notNullable();
        table.integer('semester_credit').notNullable();
        table.integer('semester_credit_limit').notNullable();
    })
    .createTable('enrollment',function(table){
        table.increments('id').primary().notNullable();

        table.integer('students_id').unsigned();
        table.integer('courses_id').unsigned();

        table.foreign('students_id').references('students.id').deferrable('deferred');
        
        table.foreign('courses_id').references('courses.id').deferrable('deferred');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('enrollment')
    .dropTableIfExists('students')
    .dropTableIfExists('course')
    .dropTableIfExists('subjects')
};
