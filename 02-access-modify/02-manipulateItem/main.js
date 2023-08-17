const log = console.log
const styles = ['Jazz','Blues']
// log(styles)
styles.push('Rock-n-Roll')
// log(styles)
styles[1]= "Classic"
// log(styles)
delete styles[0]
// log(styles)

log(styles.length)