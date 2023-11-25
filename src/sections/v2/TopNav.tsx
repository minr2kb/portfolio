import { FontWeightValues } from '@interface/enums';
import { MoreHoriz } from '@mui/icons-material';
import {
  Box,
  ClickAwayListener,
  Collapse,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { mobileMaxWidthMediaQuery } from '~/theme';

export interface Props {
  startedScroll?: boolean;
}

const sections = ['Intro', 'Education', 'Experience', 'Skills', 'Contacts'];

function TopNav({ startedScroll = false }: Props) {
  const isMobile = useMediaQuery(mobileMaxWidthMediaQuery);
  const [isOpen, setIsOpen] = useState(false);

  const onClickNavigator = (section: string) => {
    setIsOpen(false);
    const elem = document.getElementById(section.toLowerCase());
    if (!elem) return;
    elem.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (!startedScroll && isOpen) setIsOpen(false);
  }, [startedScroll]);

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          top: startedScroll ? 10 : 0,
          left: startedScroll ? 10 : 0,
          width: startedScroll ? 'calc(100vw - 20px)' : '100vw',
          borderRadius: startedScroll ? `${isMobile ? 25 : 30}px` : 0,
          alignItems: 'flex-start',
          bgcolor: startedScroll ? 'rgba(255,255,255,0.3)' : 'none',
          zIndex: 10,
          opacity: startedScroll ? 0 : 1,
          transition: 'all 0.2s ease-in-out',
          boxShadow: startedScroll ? '0px 0px 7px 2px rgba(0,0,0,0.1)' : 'none',
          backdropFilter: startedScroll ? 'blur(10px)' : 'none',
          mixBlendMode: 'color-burn',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            height: isMobile ? 50 : 60,
            px: 3,
          }}
        >
          <Typography
            sx={{
              fontSize: isMobile ? 18 : 22,
              fontWeight: FontWeightValues.BOLD,
            }}
          >
            Portfolio
          </Typography>

          <IconButton disabled={!startedScroll}>
            <MoreHoriz sx={{ opacity: startedScroll ? 1 : 0.7 }} />
          </IconButton>

          <a
            href="https://tmr-card.web.app/ben"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <Typography
              sx={{
                fontSize: isMobile ? 18 : 22,
                fontWeight: FontWeightValues.BOLD,
              }}
            >
              by. 경배 민
            </Typography>
          </a>
        </Box>
      </Box>
      <ClickAwayListener
        onClickAway={() => {
          setIsOpen(false);
        }}
      >
        <Box
          sx={{
            position: 'fixed',
            top: startedScroll ? 10 : 0,
            left: startedScroll ? 10 : 0,
            width: startedScroll ? 'calc(100vw - 20px)' : '100vw',
            borderRadius: startedScroll ? `${isMobile ? 25 : 30}px` : 0,
            alignItems: 'flex-start',
            bgcolor: startedScroll ? 'rgba(255,255,255,0.3)' : 'none',
            zIndex: 10,
            opacity: startedScroll ? 1 : 0,
            transition: 'all 0.2s ease-in-out',
            boxShadow: startedScroll ? '0px 0px 7px 2px rgba(0,0,0,0.1)' : 'none',
            backdropFilter: startedScroll ? 'blur(10px)' : 'none',
            mixBlendMode: 'normal',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              height: isMobile ? 50 : 60,
              px: 3,
            }}
          >
            <Typography
              sx={{
                fontSize: isMobile ? 18 : 22,
                fontWeight: FontWeightValues.BOLD,
              }}
            >
              Portfolio
            </Typography>

            <IconButton
              onClick={() => {
                setIsOpen(prev => !prev);
              }}
              disabled={!startedScroll}
            >
              <MoreHoriz sx={{ opacity: startedScroll ? 1 : 0.7 }} />
            </IconButton>

            <Link
              to="/v1"
              replace
              style={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <Typography
                sx={{
                  fontSize: isMobile ? 18 : 22,
                  fontWeight: FontWeightValues.BOLD,
                }}
              >
                by. 경배 민
              </Typography>
            </Link>
          </Box>

          <Collapse in={isOpen}>
            <Box px={3}>
              <Divider />
            </Box>
            <Box width="100%">
              <List sx={{ py: 2 }}>
                {sections.map(section => (
                  <ListItem key={section} disablePadding>
                    <ListItemButton
                      sx={{ mx: 1, borderRadius: 23 }}
                      onClick={() => {
                        onClickNavigator(section);
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: isMobile ? 16 : 20,
                          fontWeight: FontWeightValues.MEDIUM,
                        }}
                      >
                        {section}
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Collapse>
        </Box>
      </ClickAwayListener>
    </>
  );
}

export default TopNav;
