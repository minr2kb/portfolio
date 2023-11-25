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
  type SxProps,
} from '@mui/material';
import React, { forwardRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { mobileMaxWidthMediaQuery } from '~/theme';

interface Props {
  startedScroll?: boolean;
}

interface NavBarProps {
  startedScroll: boolean;
  openNavigator?: () => void;
  sx?: SxProps;
  children?: React.ReactNode;
}

const sections = ['Intro', 'Education', 'Experience', 'Skills', 'Projects', 'Contacts'];

const NavBar = forwardRef<HTMLDivElement, NavBarProps>(function NavBar(
  { startedScroll = false, openNavigator, sx, children },
  ref,
) {
  const isMobile = useMediaQuery(mobileMaxWidthMediaQuery);

  return (
    <Box
      ref={ref}
      sx={{
        position: 'fixed',
        top: startedScroll ? 10 : 0,
        left: startedScroll ? 10 : 0,
        width: startedScroll ? 'calc(100vw - 20px)' : '100vw',
        borderRadius: startedScroll ? `${isMobile ? 25 : 30}px` : 0,
        alignItems: 'flex-start',
        bgcolor: startedScroll ? 'rgba(255,255,255,0.5)' : 'none',
        zIndex: 10,
        transition: 'all 0.2s ease-in-out',
        boxShadow: startedScroll ? '0px 0px 7px 2px rgba(0,0,0,0.1)' : 'none',
        backdropFilter: startedScroll ? 'blur(10px)' : 'none',
        ...sx,
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

        <IconButton onClick={openNavigator} disabled={!startedScroll}>
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
      {children}
    </Box>
  );
});

function TopNav({ startedScroll = false }: Props) {
  const isMobile = useMediaQuery(mobileMaxWidthMediaQuery);
  const [isOpen, setIsOpen] = useState(false);

  const onClickNavigator = (section: string) => {
    setIsOpen(false);
    const elem = document.getElementById(section.toLowerCase());
    if (!elem) return;
    elem.scrollIntoView({ behavior: 'smooth' });
  };

  const openNavigator = () => {
    setIsOpen(prev => !prev);
  };

  useEffect(() => {
    if (!startedScroll && isOpen) setIsOpen(false);
  }, [startedScroll]);

  return (
    <>
      <NavBar
        startedScroll={startedScroll}
        sx={{ opacity: startedScroll ? 0 : 1, mixBlendMode: 'color-burn' }}
      />
      <ClickAwayListener
        onClickAway={() => {
          if (isOpen) setIsOpen(false);
        }}
      >
        <NavBar
          startedScroll={startedScroll}
          openNavigator={openNavigator}
          sx={{ opacity: startedScroll ? 1 : 0 }}
        >
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
        </NavBar>
      </ClickAwayListener>
    </>
  );
}

export default TopNav;
