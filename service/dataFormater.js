const formater = {
    formatData: (data) => {
        
        const [rows,fields]= data;
            const columnNames = fields.map(field => field.name);
            const jsonData = rows.map(row => {
            const rowData = {};
            for(let i = 0; i < columnNames.length; i++) {
                rowData[columnNames[i]] = row[i];
            }
            return rowData;
        });
        return jsonData;
}}

module.exports = formater;