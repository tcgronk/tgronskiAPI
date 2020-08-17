const DeliveriesService={
    insertOrder(knex, newOrder){
        return knex
        .insert(newOrder)
        .into("orders")
        .returning("*")
        .then((rows)=>{
            return rows[0];
        });
    }
}

module.exports = DeliveriesService;