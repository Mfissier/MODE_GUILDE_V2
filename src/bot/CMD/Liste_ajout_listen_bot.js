const ADD_BOX_BONUS = require('./CMD_MENEUR/ADD_BOX_BONUS');
const ADD_GRADE  = require('./CMD_MENEUR/ADD_GRADE');
const ADD_IMMU_PURGE  = require('./CMD_MENEUR/ADD_IMMU_PURGE');
const ADD_LIKE_BONUS = require('./CMD_MENEUR/ADD_LIKE_BONUS');
const ADD_MANA_MAX = require('./CMD_MENEUR/ADD_MANA_MAX');
const ADD_PERCO_MAX = require('./CMD_MENEUR/ADD_PERCO_MAX');
const ADD_PERCO_USR = require('./CMD_MENEUR/ADD_PERCO_USR');
const ADD_XP = require('./CMD_MENEUR/ADD_XP');
const DELETE_BOX_BONUS = require('./CMD_MENEUR/DELETE_BOX_BONUS');
const DELETE_IMMU_PURGE  = require('./CMD_MENEUR/DELETE_IMMU_PURGE');
const DELETE_LIKE_BONUS = require('./CMD_MENEUR/DELETE_LIKE_BONUS');
const DELETE_MANA_MAX = require('./CMD_MENEUR/DELETE_MANA_MAX');
const DELETE_PERCO_MAX = require('./CMD_MENEUR/DELETE_PERCO_MAX');
const DELETE_PERCO_USR = require('./CMD_MENEUR/DELETE_PERCO_USR');
const DELETE_STARS = require('./CMD_MENEUR/DELETE_STARS');
const DELETE_XP = require('./CMD_MENEUR/DELETE_XP');
const DELETE_GRADE  = require('./CMD_MENEUR/DELETE_GRADE');
const RELOAD_MANA = require('./CMD_MENEUR/RELOAD_MANA');
const RELOAD_MANA_ALL = require('./CMD_MENEUR/RELOAD_MANA_ALL');
const RESTART_BONUS_ALL = require('./CMD_MENEUR/RESTART_BONUS_ALL');
const CHANGE_USR_NAME = require('./CMD_MENEUR/CHANGE_USR_NAME');

case '!ADD_BOX_BONUS' :
    ADD_BOX_BONUS.ADD_BOX_BONUS(message);
break;

case '!ADD_GRADE' :
    ADD_GRADE.ADD_GRADE(message);
break;


case '!ADD_IMMU_PURGE' :
    ADD_IMMU_PURGE.ADD_IMMU_PURGE(message);
break;

case '!ADD_LIKE_BONUS' :
    ADD_LIKE_BONUS.ADD_LIKE_BONUS(message);
break;

case '!ADD_MANA_MAX' :
    ADD_MANA_MAX.ADD_MANA_MAX(message);
break;

case '!ADD_PERCO_MAX' :
    ADD_PERCO_MAX.ADD_PERCO_MAX(message);
break;

case '!ADD_PERCO_USR' :
    ADD_PERCO_USR.ADD_PERCO_USR(message);
break;

case '!ADD_XP' :
    ADD_XP.ADD_XP(message);
break;

case '!DELETE_BOX_BONUS' :
    DELETE_BOX_BONUS.DELETE_BOX_BONUS(message);
break;


case '!DELETE_IMMU_PURGE' :
    DELETE_IMMU_PURGE.DELETE_IMMU_PURGE(message);
break;

case '!DELETE_LIKE_BONUS' :
    DELETE_LIKE_BONUS.DELETE_LIKE_BONUS(message);
break;

case '!DELETE_MANA_MAX' :
    DELETE_MANA_MAX.DELETE_MANA_MAX(message);
break;

case '!DELETE_PERCO_MAX' :
    DELETE_PERCO_MAX.DELETE_PERCO_MAX(message);
break;



case '!DELETE_PERCO_USR' :
    DELETE_PERCO_USR.DELETE_PERCO_USR(message);
break;

case '!DELETE_STARS' :
    DELETE_STARS.DELETE_STARS(message);
break;

case '!DELETE_XP' :
    DELETE_XP.DELETE_XP(message);
break;

case '!DELETE_GRADE' :
    DELETE_GRADE.DELETE_GRADE(message);
break;

case '!RELOAD_MANA' :
    RELOAD_MANA.RELOAD_MANA(message);
break;

case '!RELOAD_MANA_ALL' :
    RELOAD_MANA_ALL.RELOAD_MANA_ALL(message);
break;
case '!RESTART_BONUS_ALL' :
    RESTART_BONUS_ALL.RESTART_BONUS_ALL(message);
break;


case '!CHANGE_USR_NAME' :
    CHANGE_USR_NAME.CHANGE_USR_NAME(message);
break;