# migracion de tablas 
  php artisan migrate:refresh
# migrar en caso quierar el sistema de recuerdos
  php artisan migrate:refresh --path=database/migrations/recuerdos
# ejecutar el seeder de recuerdos
  php artisan db:seed --class='Database\Seeders\recuerdos\RecuerdosSeeder'