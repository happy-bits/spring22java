USE [master]
GO
/****** Object:  Database [ChurchDb]    Script Date: 2/15/2022 10:05:52 AM ******/
CREATE DATABASE [ChurchDb]
GO
USE [ChurchDb]
GO
/****** Object:  Table [dbo].[Church]    Script Date: 2/15/2022 10:05:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Church](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[LocatedInCityId] [int] NOT NULL,
	[BuiltYear] [int] NOT NULL,
 CONSTRAINT [PK_Church] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Citizen]    Script Date: 2/15/2022 10:05:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Citizen](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[LivesInCityId] [int] NULL,
 CONSTRAINT [PK_Citizen] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[City]    Script Date: 2/15/2022 10:05:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[City](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_City] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FavoriteChurch]    Script Date: 2/15/2022 10:05:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FavoriteChurch](
	[ChurchId] [int] NOT NULL,
	[CitizenId] [int] NOT NULL,
 CONSTRAINT [PK_FavoriteChurch] PRIMARY KEY CLUSTERED 
(
	[ChurchId] ASC,
	[CitizenId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Church] ON 
GO
INSERT [dbo].[Church] ([Id], [Name], [LocatedInCityId], [BuiltYear]) VALUES (1, N'Oscar-Fredriks church', 1, 1893)
GO
INSERT [dbo].[Church] ([Id], [Name], [LocatedInCityId], [BuiltYear]) VALUES (2, N'Sankt Georgios church', 2, 1890)
GO
INSERT [dbo].[Church] ([Id], [Name], [LocatedInCityId], [BuiltYear]) VALUES (3, N'Matteus church', 3, 1892)
GO
INSERT [dbo].[Church] ([Id], [Name], [LocatedInCityId], [BuiltYear]) VALUES (4, N'Masthuggs church', 1, 1914)
GO
SET IDENTITY_INSERT [dbo].[Church] OFF
GO
SET IDENTITY_INSERT [dbo].[Citizen] ON 
GO
INSERT [dbo].[Citizen] ([Id], [Name], [LivesInCityId]) VALUES (1, N'Linnea', 1)
GO
INSERT [dbo].[Citizen] ([Id], [Name], [LivesInCityId]) VALUES (2, N'Harry', 2)
GO
SET IDENTITY_INSERT [dbo].[Citizen] OFF
GO
SET IDENTITY_INSERT [dbo].[City] ON 
GO
INSERT [dbo].[City] ([Id], [Name]) VALUES (1, N'Göteborg')
GO
INSERT [dbo].[City] ([Id], [Name]) VALUES (2, N'Stockholm')
GO
INSERT [dbo].[City] ([Id], [Name]) VALUES (3, N'Norrköping')
GO
SET IDENTITY_INSERT [dbo].[City] OFF
GO
INSERT [dbo].[FavoriteChurch] ([ChurchId], [CitizenId]) VALUES (1, 1)
GO
INSERT [dbo].[FavoriteChurch] ([ChurchId], [CitizenId]) VALUES (3, 1)
GO
INSERT [dbo].[FavoriteChurch] ([ChurchId], [CitizenId]) VALUES (3, 2)
GO
ALTER TABLE [dbo].[Church]  WITH CHECK ADD  CONSTRAINT [FK_Church_City] FOREIGN KEY([LocatedInCityId])
REFERENCES [dbo].[City] ([Id])
GO
ALTER TABLE [dbo].[Church] CHECK CONSTRAINT [FK_Church_City]
GO
ALTER TABLE [dbo].[Citizen]  WITH CHECK ADD  CONSTRAINT [FK_Citizen_City] FOREIGN KEY([LivesInCityId])
REFERENCES [dbo].[City] ([Id])
GO
ALTER TABLE [dbo].[Citizen] CHECK CONSTRAINT [FK_Citizen_City]
GO
ALTER TABLE [dbo].[FavoriteChurch]  WITH CHECK ADD  CONSTRAINT [FK_FavoriteChurch_Church] FOREIGN KEY([ChurchId])
REFERENCES [dbo].[Church] ([Id])
GO
ALTER TABLE [dbo].[FavoriteChurch] CHECK CONSTRAINT [FK_FavoriteChurch_Church]
GO
ALTER TABLE [dbo].[FavoriteChurch]  WITH CHECK ADD  CONSTRAINT [FK_FavoriteChurch_Citizen] FOREIGN KEY([CitizenId])
REFERENCES [dbo].[Citizen] ([Id])
GO
ALTER TABLE [dbo].[FavoriteChurch] CHECK CONSTRAINT [FK_FavoriteChurch_Citizen]
GO
USE [master]
GO
ALTER DATABASE [ChurchDb] SET  READ_WRITE 
GO
