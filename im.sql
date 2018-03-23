CREATE TABLE `users`(
    `username` VARCHAR(20) NOT NULL,
    `password` VARCHAR(16) NOT NULL,
    `status` VARCHAR(7) NOT NULL,
    PRIMARY KEY(`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO `users` (`username`, `password`, `status`) VALUES ('admin','admin', 'offline');
INSERT INTO `users` (`username`, `password`, `status`) VALUES ('Test','Test', 'offline');
INSERT INTO `users` (`username`, `password`, `status`) VALUES ('DwightShelford','DwightShelford', 'offline');
INSERT INTO `users` (`username`, `password`, `status`) VALUES ('JimSantanko','JimSantanko', 'offline');
INSERT INTO `users` (`username`, `password`, `status`) VALUES ('AgentScarn','AgentScarn', 'offline');
INSERT INTO `users` (`username`, `password`, `status`) VALUES ('PamPam','PamPam', 'offline');
INSERT INTO `users` (`username`, `password`, `status`) VALUES ('WUPHF.COM','wuphf.com', 'offline');


CREATE TABLE `messages`(
    `messageID` INT(11) NOT NULL AUTO_INCREMENT,
    `sender` VARCHAR(20) NOT NULL,
    `message` VARCHAR(255) NOT NULL,
    `date` VARCHAR(10) NOT NULL,
    `receiver` VARCHAR(20) NOT NULL,
    PRIMARY KEY(`messageID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO `messages` (`sender`, `message`, `date`, `receiver`) VALUES ('AgentScarn','Hey Guys, how was the weekend?', '23/03/2018', 'all');
INSERT INTO `messages` (`sender`, `message`, `date`, `receiver`) VALUES ('DwightShelford','Pretty good, you?', '23/03/2018', 'all');
INSERT INTO `messages` (`sender`, `message`, `date`, `receiver`) VALUES ('JimSantanko','Not too shabby', '23/03/2018', 'all');
INSERT INTO `messages` (`sender`, `message`, `date`, `receiver`) VALUES ('DwightShelford','I got some cool new gear in Second Life', '23/03/2018', 'all');
INSERT INTO `messages` (`sender`, `message`, `date`, `receiver`) VALUES ('WUPHF.COM','Thats awesome, Dwight! Why not write a Wuphf post about it on www.wuphf.com!', '23/03/2018', 'all');