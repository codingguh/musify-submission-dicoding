/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
exports.shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
    pgm.createTable('songs', {
        id: {
            type: 'varchar(30)',
            primaryKey: true,
        },
        title: {
            type: 'varchar(50)',
            notNull: true,
        },
        year: {
            type: 'integer',
            notNull: true,
        },
        performer: {
            type: 'varchar(50)',
            notNull: true,
        },
        genre: {
            type: 'varchar(50)',
            notNull: true,
        },
        duration: {
            type: 'integer',
        },
        album_id: {
            type: 'varchar(30)',
            references: '"albums"',
            onDelete: 'cascade',
            onUpdate: 'cascade',
        },
        created_at: {
            type: 'text',
            notNull: true,
        },
        updated_at: {
            type: 'text',
            notNull: true,
        },
    });
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => {
    pgm.dropTable('songs');
};
